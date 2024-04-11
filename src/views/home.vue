<template>
  <div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Başlığa göre ara" v-model="aranacakKelime">
      <div class="input-group-append">
        <button class="btn btn-success" type="button">Ara</button>
        <button class="btn btn-warning" @click="yenile">Yenile</button>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <h2>Eğitimler</h2>
          <div class="row">
            <div class="col-md-4" v-for="card in filtrelenmisUrunler" :key="card.id">
              <div class="card mb-4 shadow-sm" @click="goToDetail(card.id)">
                <img :src="require('@/assets/' + card.logoPath)" class="card-img-top" alt="Card image cap" />
                <div class="card-body">
                  <h3 class="card-title">{{ card.title }}</h3>
                  <p class="card-text">{{ card.description }}</p>
                </div>
                <div class="card-footer">
                  <h3>{{ card.price }}₺</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-header">Sepet</div>
            <div class="card-body">
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between" v-for="(item, index) in $store.state.cart" :key="index">
                  <span>{{ item.title }}</span>
                  <span>{{ item.price }}₺</span>
                  <button class="btn btn-danger" @click="removeFromCart(item)">Kaldır</button>
                </li>
              </ul>
              <h5>Toplam: {{ total }}₺</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";

export default {
  data() {
    return {
      cards: [
        { id: 1, title: "Vue.js", description: "Vue.js Eğitimi", price: 125, category: "Frontend", logoPath: "vue.png" },
        { id: 2, title: "Flutter", description: "Flutter Eğitimi", price: 1255, category: "Mobil", logoPath: "flutter.png" },
        { id: 3, title: "React", description: "React Eğitimi", price: 12,category:"Frontend",logoPath:"React.png" },
        { id: 4, title: ".Net Core", description: ".Net Core Eğitimi", price: 1425,category:"Backend",logoPath:"netcore.png" },
        { id: 5, title: "Unity", description: "Unity Eğitimi", price: 185,category:"Mobil",logoPath:"unity.png" },
        { id: 6, title: "PostgreSQL", description: "PostgreSQL Eğitimi", price: 1250,category:"Backend",logoPath:"Postgresql.png" },
        { id: 7, title: "C", description: "C Eğitimi", price: 125,category:"Programlama",logoPath:"c.png" },
        { id: 8, title: "C#", description: "C# Eğitimi", price: 125,category:"Programlama",logoPath:"csharp.png" },
        // Diğer kartlar...
      ],
      aranacakKelime: "",
    };
  },
  computed: {
    filtrelenmisUrunler() {
      return this.cards.filter(card => {
        return card.title.toLowerCase().includes(this.aranacakKelime.toLowerCase());
      });
    },
    total() {
      if (this.$store.state.cart.length === 0) {
        return 0;
      }
      return this.$store.state.cart.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
    yenile() {
      this.$store.state.cart = [];
      window.location.reload();
    },
    removeFromCart(item) {
      const index = this.$store.state.cart.findIndex(cartItem => cartItem === item);
      if (index !== -1) {
        this.$store.commit("removeFromCart", index);
      }
    },
    goToDetail(id) {
      this.$router.push({ name: 'CardDetail', params: { id: id } });
    }
  },
  components: {
    Footer
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 30px;
  transition: transform 0.3s;
}
.card:hover {
  transform: scale(1.05);
}
.card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
