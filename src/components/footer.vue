<template>
  <div>
    <footer>
      <p>{{ new Date().getFullYear() }} - <strong>Ebubekir Yıldırım</strong></p>
      <div class="social-icons">
        <a v-bind:href="linkedin" class="icon-link" v-html="icon('linkedin')"></a>
        <a v-bind:href="instagram" class="icon-link" v-html="icon('instagram')"></a>
        <a v-bind:href="github" class="icon-link" v-html="icon('github')"></a>
      </div>
    </footer>
  </div>
</template>

<script>
import feather from 'feather-icons';

export default {
  data() {
    return {
      linkedin: "https://www.linkedin.com/in/ebubekir-y%C4%B1ld%C4%B1r%C4%B1m-8475b9102/",
      instagram: "https://www.instagram.com/bekiiryldrm/",
      github: "https://github.com/bekir7"
    };
  },
  methods: {
    icon(name) {
      return feather.icons[name].toSvg();
    }
  }
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 20px 0;
  color: lightgreen;
  text-align: center;
  width: 100%;
  height: 100px;
  margin-left: -10%;
  margin-top: 50px;
}

.social-icons {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-link {
  color: lightgreen;
  margin: 0 5px;
  font-size: 24px;
}

.icon-link:hover {
  color: white;
}
</style>
