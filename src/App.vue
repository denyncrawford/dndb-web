<template>
  <navigation :links="links" image="true" title="DnDB" />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <site-footer/>
</template>
<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import axios from 'axios'
import Navigation from './components/navigation/Nav.vue'
import SiteFooter from './components/Footer.vue'
export default {
  data() {
    return {
      links: [
        {displayname: "Home", to: { name: 'Home', path: '/'}},
        {displayname: "Why DnDB?", to: { name: 'Why', path: '/why'}},
        {displayname: "Documentation", to: { name: 'Docs', path: '/docs'}},
        {displayname: "Support", to: { name: 'Monis', path: '/monis'}}
      ]
    }
  },
  setup() {
    let router = useRouter();
    router.beforeEach((to, from) => {
      document.title = to.meta.title || 'DnDB'
    })
  },
  async mounted() {
    const store = this.$store
    let { data } = await axios('https://raw.githubusercontent.com/denyncrawford/dndb/master/egg.json')
    store.commit('setVersion', data.version);
  },
  components: {
    Navigation,
    SiteFooter
  }
}
</script>

<style>
@import 'highlight.js/styles/dracula.css';
@import 'animate.css/animate.min.css';
@import './assets/themes/dndb/index.css';
@import './assets/styles/index.css';
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
}

html {
  scrollbar-face-color: #646464;
  scrollbar-base-color: #353535;
  scrollbar-3dlight-color: #4b4b4b;
  scrollbar-highlight-color: #646464;
  scrollbar-track-color: #000;
  scrollbar-arrow-color: #000;
  scrollbar-shadow-color: #646464;
  scrollbar-dark-shadow-color: #646464;
  scroll-behavior: smooth;
}

html, body {
  background-color: black;
}

::-webkit-scrollbar { width: 8px; height: 3px;}
::-webkit-scrollbar-button {  background-color: #666; }
::-webkit-scrollbar-track {  background-color: #646464;}
::-webkit-scrollbar-track-piece { background-color: #000;}
::-webkit-scrollbar-thumb { height: 50px; background-color: #666;}
::-webkit-scrollbar-corner { background-color: #2c2c2c;}
::-webkit-resizer { background-color: #666;}

::selection {
 background-color:#00ffa8;
 color:black
}

.text-main-color {
  color: #00ffa8
}
  .fade-enter-active {
   animation: fadeIn;
   animation-duration: .5s;
  }

  .fade-leave-active {
    animation: fadeOut;
    animation-duration: .5s;
  }
</style>
