<template>
    <page>
      <div class="h-full z-10 flex justify-center items-center">
        <div class="flex items-center">
          <img class="logo" alt="Vue logo" src="../assets/dndblogo.png" />
          <div class="ml-10 min-w-full">
            <h1 class="text-5xl">{{ title }}</h1>
            <h4 class="text-2xl" id="typed"></h4>
            <p class="max-w-xl mt-5">DnDB is a powerful but minimalist database engine written on JS/TS for the deno runtime that uses the mongo query API to edit and find data, making it 100% exportable to a mongojs environment.</p>
            <el-button type="primary" class="mt-5" @click="increment">count is: {{ count }}</el-button>
            <p class="mt-5">DnDB latest version is: <code>v{{version}}</code>.</p>
          </div>
        </div>
        <div class="">
      </div>
      </div>
    </page>
</template>

<script>
import Page from '../components/structure/Page.vue'
import TypeIt from "typeit";
import { computed } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      title: "DnDB",
      version: ""
    }
  },
  async mounted() {
    let version = await axios('https://raw.githubusercontent.com/denyncrawford/dndb/master/egg.json')
    console.log(version);
    this.version = version.data.version
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
    .type('the database for Deno.')
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
  },
  components: {
    Page,
  }
}
</script>

<style scoped>
    .logo {
        max-width: 300px;
        animation: jackInTheBox; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 1s; /* don't forget to set a duration! */
    }
</style>