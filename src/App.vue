<template>
  <navigation :links="links" image="true" title="DnDB" />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>
import { useRouter } from "vue-router";
import Navigation from './components/navigation/Nav.vue'
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
  components: {
    Navigation
  }
}
</script>

<style>
  .fade-enter-active {
   animation: fadeIn;
   animation-duration: .5s;
  }

  .fade-leave-active {
    animation: fadeOut;
    animation-duration: .5s;
  }
</style>
