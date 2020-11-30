<template>
  <div class="">
    <h1 class="">{{ msg }}</h1>
    <h4 id="typed"></h4>
    <el-button @click="increment">count is: {{ count }}</el-button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  </div>
</template>

<script>
import TypeIt from "typeit";
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    new TypeIt("#typed", {
    speed: 75,
  }).type("DnDB is ", {delay: 300})
  .type('fast')
  .pause(700)
  .delete(4)
  .type('awasome')
  .pause(700)
  .delete(7)
  .type('powerful')
  .pause(700)
  .delete(8)
  .type('asynchronous')
  .pause(700)
  .delete(12)
  .type('your database for Deno.')
  .go();
  },
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count);
    const increment = () => store.commit('increment');
    return {
      count,
      increment
    }
  }
}
</script>

<style >
  h1 {
    color: #00ffa8;
  }
</style>