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
@import './assets/styles/index.css';
  .fade-enter-active {
   animation: fadeIn;
   animation-duration: .5s;
  }

  .fade-leave-active {
    animation: fadeOut;
    animation-duration: .5s;
  }
</style>
