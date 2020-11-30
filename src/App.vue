<template>
  <router-view/>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    let router = useRouter();
    router.beforeEach((to, from) => {
      document.title = to.meta.title || 'DnDB'
    })
  }
}
</script>
