<template>
    <div class="container d-flex justify-content-center">
        <div class="col-sm-5">
            <div class="card">
                <div class="card-header">Kullanıcı Girişi</div>
                <div class="card-body">
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" v-model="email" placeholder="Email"
                                required :class="{ 'is-valid': emailCheck(email), 'is-invalid': !emailCheck(email) }" />
                            <div v-if="!emailCheck(email)" class="invalid-feedback">Geçerli bir email adresi giriniz.
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Şifre</label>
                            <input type="password" class="form-control" id="password" v-model="password"
                                placeholder="Şifre" required />
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Giriş Yap</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const email = ref('');
        const password = ref('');

        const emailCheck = (input) => {
            const emailControl = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return emailControl.test(input);
        };

        const login = () => {
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');
            if (!emailCheck(email.value)) { return; }
            if (email.value === storedEmail && password.value === storedPassword) {
                console.log('Giriş başarılı');
                router.push({ name: "home" });
                // Giriş başarılı, yönlendirme yapabilirsiniz
            } else {
                console.error('Giriş hatası: Kullanıcı adı veya şifre yanlış');
            }
        };

        return {
            email,
            password,
            login,
            emailCheck
        };
    }
};


</script>
