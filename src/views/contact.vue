<template>
    <div class="contact-section">
      <div class="background-image">
        <!-- Arka plan resmi -->
        <img :src="img" alt="Background Image" />
      </div>
      <div class="contact-content" style="background-color: rgba(255, 255, 255, 0.5);">
        <!-- Metin -->
        <h1 >Bize Ulaşın</h1>
        
        
        <!-- İletişim formu veya bilgileri buraya ekleyebilirsiniz -->
      </div>
      
    </div>
    <div class="contact-section2">
        <h2>Soru, Görüş Ve Önerileriniz</h2>
        <div class="container d-flex justify-content-center">
        <div class="col-sm-5">
            <div class="card">
                <div class="card-body">
                    <form >
                        <div class="form-group">
                            <label >Adınız Soyadınız</label>
                            <input class="form-control"  placeholder="Adınız Soyadınız"/>
                           
                        </div>
                        <div class="form-group">
                            <label >Email</label>
                            <input  class="form-control" 
                                placeholder="Email"  />
                        </div>
                        <div class="form-group">
                            <label >Konu</label>
                            <input  class="form-control" 
                                placeholder="Konu"  />
                        </div>
                        <div class="form-group">
                            <label >Mesajınız</label>
                            <input  class="form-control" 
                                placeholder="Mesaj"  />
                        </div>
                        <br>
                        <button type="submit" class="btn btn-warning w-100">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br><br>
    <br>
    <h2>İletişim Bilgileri</h2>
    <br>
    <div class="container d-flex justify-content-between">
    <div class="col-sm-3 "> <!-- mr-4 sınıfı ile 4 birimlik bir sağ boşluk -->
        <div class="card bg-danger">
            <div class="card-body">
                <a v-html="icon('mail')"></a>
                <p>E-Posta Adresimiz</p>
                <p>ebu915@gmail.com</p>
            </div>
        </div>
    </div>
    <div class="col-sm-3 "> <!-- ml-4 sınıfı ile 4 birimlik bir sol boşluk -->
        <div class="card bg-success">
            <div class="card-body">
                <a v-html="icon('phone')"></a>
                <p>Telefon Numaramız</p>
                <p>+9055555555</p>
            </div>
        </div>
    </div>
    <div class="col-sm-3 "> <!-- ml-4 sınıfı ile 4 birimlik bir sol boşluk -->
        <div class="card bg-warning">
            <div class="card-body">
                <a v-html="icon('home')"></a>
                <p>Merkez Ofis</p>
                <p>Türkiye</p>
            </div>
        </div>
    </div>
</div>



    </div>

<Footer />
<br>
<br>

   
  </template>
  
  <script>
  import feather from 'feather-icons';
  import Footer from "@/components/footer.vue";
  export default {
    data() {
      return {
        img: require('@/assets/codecode.png')
      }
    },
    methods: {
    icon(name) {
      return feather.icons[name].toSvg();
    }
  },
  components: {
    Footer
  }
  }
  </script>
  
  <style scoped>
  .contact-section {
    position: relative;
    text-align: center; /* Metni ortala */
    margin-left: -16%;
    margin-top: 20px;
  }
  .contact-section2 {
    position: relative;
    text-align: center; /* Metni ortala */
    margin-left: -16%;
    margin-top: 20px;
    font-weight: 500;
  }
  .background-image {
    position: relative;
    width: 150%;
    height: 300px; /* Arka plan resminin yüksekliği */
    overflow: hidden;
    
   
  }
  .background-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .contact-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
  .contact-content h1 {
    font-size: 5rem;
    margin-bottom: 10px;
  }
  .contact-content p {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  </style>
  