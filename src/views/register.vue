<template>
    <div class="container d-flex justify-content-center">
        <div class="col-sm-5">
            <div class="card">
                <div class="card-header">Kullanıcı Oluştur</div>
                <div class="card-body">
                    <form @submit.prevent="register">
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
                        <div class="form-group">
                            <label for="repassword">Şifre</label>
                            <input type="password" class="form-control" id="repassword" v-model="repassword"
                                placeholder="Şifre" required />
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Kayıt Ol</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const email = ref('');
        const password = ref('');
        const repassword = ref('');

        const emailCheck = (input) => {
            const emailControl = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return emailControl.test(input);
        };
        const sifrelerKontrol = (input1, input2) => {
            if (input1.value !== input2.value) {
                return;
            }
        };

        const register = () => {
            if (!emailCheck(email.value)) {
                // Eğer email doğrulaması başarısızsa
                return;
            }
            localStorage.setItem('email', email.value);
            localStorage.setItem('password', password.value);
            localStorage.setItem('repassword', repassword.value);

            console.log('Kayıt başarılı');
            // Kayıt başarılı mesajı veya yönlendirme yapılabilir
        };

        return {
            email,
            password,
            repassword,
            register,
            emailCheck,
            sifrelerKontrol
        };
    }
};
</script>
