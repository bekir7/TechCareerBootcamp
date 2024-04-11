<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Bootcamp Sepeti</router-link>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Eğitimler</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Kategoriler
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link to="/category/1" class="dropdown-item">Frontend</router-link></li>
              <li><router-link to="/category/2" class="dropdown-item">Backend</router-link></li>
              <li><router-link to="/category/3" class="dropdown-item">Mobil</router-link></li>
              <li><router-link to="/category/4" class="dropdown-item">Programlama</router-link></li>
              
             
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Hakkımızda</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">İletişim</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    // toggleSidebar() {
    //   this.$emit('toggle-sidebar');
    // }
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
