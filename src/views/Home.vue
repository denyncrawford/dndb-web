<template>
    <page @mousemove="parallax" class="overflow-hidden" bg="bg-black">
      <div class="w-screen -top-0 -left-0 h-screen absolute">
        <div ref="pllx" class="min-w-screen min-h-screen header">
        </div>
      </div>
      <div class="min-h-screen flex-col z-10 flex justify-center items-center">
        <div ref="hero" class="z-50 flex items-top">
          <img class="logo" alt="DnDB" src="../assets/dndblogo.png" />
          <div class="ml-10">
            <div id="animateMe" class="flex relative max-w-xl">
              <h1 class="text-main-color text-5xl max-w-xl">{{ title }}</h1>
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
        <div data-rellax-speed="5" class="bg-black rellax justify-center w-full flex flex-col text-center">
          <h1 class="mx-auto text-center text-main-color text-5xl max-w-xl mt-20 mb-10">Get Started</h1>
          <p class="mb-10 text-gray-80">Try this points to getting start with DnDB</p>
          <div class="w-9/12 mx-auto grid grid-cols-4 gap-10">
            <div class="p-10 rounded-2xl flex flex-col justify-center border border-2 transition duration-200 hover:border-main-color">
              <h1 class="text-3xl max-w-xl mb-5">The Project</h1>
              <div class="mb-5 flex">
                <i class="mx-auto stroke-current text-main-color" data-feather="plus"></i>
              </div>
              <p>Know more about this and other projects by Crawford.</p>
              <el-button type="primary" class="hover:text-black bg-transparent text-white mt-5 text-black" @click="increment">Read</el-button>
            </div>
            <div class="p-10 rounded-2xl flex flex-col justify-center border border-2 transition duration-200 hover:border-main-color">
              <h1 class="text-3xl max-w-xl mb-5">Documentation</h1>
              <div class="mb-5 flex">
                <i class="mx-auto stroke-current text-main-color" data-feather="book-open"></i>
              </div>
              <p>Read the Documentation to learn about the DnDB API</p>
              <el-button type="primary" class="hover:text-black bg-transparent text-white mt-5 text-black" @click="increment">Get Started</el-button>
            </div>
            <div class="p-10 rounded-2xl border border-2 transition duration-200 hover:border-main-color">
              <h1 class="text-3xl max-w-xl">Doomie</h1>
              <p></p>
            </div>
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
import Rellax from "rellax"
import { replace } from 'feather-icons'

export default {
  name: 'App',
  data() {
    return {
      title: "The database engine for the Dinosaurs.",
      version: ""
    }
  },
  methods: {
    parallax(e) {
      let hero = this.$refs.hero;
      let el = this.$refs.pllx;
      let x = (window.outerWidth - e.pageX * 2) / 100;
      let y = (window.outerHeight - e.pageY * 2) / 100;
      el.style.transform = `translateX(${x}px) translateY(${y}px)`
      hero.style.transform = `translateX(-${x}px) translateY(-${y}px)`
    }
  },
  async mounted() {
    replace()
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
    .header {
      background-image: url('../assets/bg.jpg');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
    h1 span {
        display: inline-block;
        position: absolute;
    }
</style>