<template>
  <div>
    <div v-if="loading" class="text-center fs-5">Yükleniyor...</div>
    <div v-else>
      <div v-if="selectedCard" class="card">
        <img :src="require('@/assets/' + selectedCard.logoPath)" class="card-img-top" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title fs-4">{{ selectedCard.title }}</h5>
          <p class="card-text fs-6"><strong>Açıklama:</strong> {{ selectedCard.description }}</p>
          <p class="card-text fs-6"><strong>Kategori:</strong> {{ selectedCard.category }}</p>
          <p class="card-text fs-6"><strong>Fiyat:</strong> {{ selectedCard.price }}₺</p>
          <button class="btn btn-success fs-6" @click="addToCart(selectedCard)">Sepete Ekle</button>
        </div>
      </div>
      <div v-else class="text-center fs-5">Ürün bulunamadı.</div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import { mapGetters } from 'vuex';
import Footer from "@/components/footer.vue";
export default {
  data() {
    return {
     
      selectedCard: {},
      loading: true
    };
  },
  created() {
    this.loadSelectedCard();
  },
  methods: {
    loadSelectedCard() {
      const cardId = parseInt(this.$route.params.id);
      const card = this.cards.find(card => card.id === cardId);
      if (card) {
        this.selectedCard = card;
        this.loading = false;
      } else {
        this.loading = false;
      }
    },
    addToCart(product) {
      this.$store.commit('addToCart', product);
      console.log("Sepete eklendi:", product);
    }
  },
  computed: {
    ...mapGetters(['cartItems']),
    cards() {
      return [
     
      { id: 1, title: "Vue.js", description: "Vue.js Eğitimi", price: 125,category:"Frontend",logoPath:"vue.png" },
        { id: 2, title: "Flutter", description: "Flutter Eğitimi", price: 1255,category:"Mobil",logoPath:"flutter.png" },
        { id: 3, title: "React", description: "React Eğitimi", price: 12,category:"Frontend",logoPath:"React.png" },
        { id: 4, title: ".Net Core", description: ".Net Core Eğitimi", price: 1425,category:"Backend",logoPath:"netcore.png" },
        { id: 5, title: "Unity", description: "Unity Eğitimi", price: 185,category:"Mobil",logoPath:"unity.png" },
        { id: 6, title: "PostgreSQL", description: "PostgreSQL Eğitimi", price: 1250,category:"Backend",logoPath:"Postgresql.png" },
        { id: 7, title: "C", description: "C Eğitimi", price: 125,category:"Programlama",logoPath:"c.png" },
        { id: 8, title: "C#", description: "C# Eğitimi", price: 125,category:"Programlama",logoPath:"csharp.png" },
      ];
    },
  },
  components: {
    Footer
  }
};
</script>

<style scoped>
.card {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
}
.card img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
