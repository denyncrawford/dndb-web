<template>
    <page class="overflow-hidden" bg="bg-black">
      <div class="min-h-screen flex-col z-10 flex justify-center items-center">
        <div class="z-50 flex items-top">
          <img class="logo" alt="DnDB" src="../assets/dndblogo.png" />
          <div class="ml-10">
            <div id="animateMe" class="flex relative max-w-xl">
              <h1 class="bg-black text-main-color text-5xl max-w-xl">{{ title }}</h1>
            </div>
            <h4 class="text-2xl wrap" id="typed"></h4>
            <p class="max-w-xl mt-5">DnDB is a powerful but minimalist database engine written on JS/TS for the deno runtime that uses the mongo query API to edit and find data, making it 100% exportable to a mongojs environment.</p>
            <el-button type="primary" class="mt-5 text-black" @click="increment">Get Started</el-button>
            <p class="inline-block ml-5 mt-5 text-gray">DnDB latest version is: <code>v{{version}}</code>.</p>
          </div>
        </div>
      </div>
    </page>
    <page bg="bg-black">
        <div data-rellax-speed="2" class="rellax justify-center w-full flex text-center">
          <h1 class="text-center text-main-color text-5xl max-w-xl mb-30">Start from here</h1>
        </div>
    </page>
</template>

<script>
import Page from '../components/structure/Page.vue'
import TypeIt from "typeit";
import { computed } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import Rellax from "rellax"

export default {
  name: 'App',
  data() {
    return {
      title: "The database engine for the Dinosaurs.",
      version: ""
    }
  },
  async mounted() {
    let version = await axios('https://raw.githubusercontent.com/denyncrawford/dndb/master/egg.json')
    this.version = version.data.version
    new TypeIt("#typed", {
    speed: 30,
    }).type("DnDB is ", {delay: 300})
    .type('fast')
    .pause(700)
    .delete(4)
    .type('open source')
    .pause(700)
    .delete(11)
    .type('NoSQL')
    .pause(700)
    .delete(5)
    .type('asynchronous')
    .pause(700)
    .delete(12)
    .type('the datastore for Deno.')
    .go();
    var rellax = new Rellax('.rellax');
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
    Page
  }
}
</script>

<style scoped>
    .logo {
        max-width: 200px;
        max-height: 200px;
        animation: jackInTheBox; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 1s; /* don't forget to set a duration! */
    }
    h1 span {
        display: inline-block;
        position: absolute;
    }
</style>