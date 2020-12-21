<template>
    <div>
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
              <a class="el-button el-button--primary mt-5 text-black" href="#get-started" data-v-c5362648="" data-v-a5f3b890-s=""><span>Get Started</span></a>
              <p class="inline-block ml-5 mt-5 text-gray">DnDB latest version is: <code>v{{version}}</code>.</p>
            </div>
          </div>
        </div>
      </page>
    <page ref="get-started" id="get-started" bg="bg-black">
      <div class="px-32">
        <h1 class="text-main-color text-5xl inline-block">Get started</h1>
        <p class="mt-5">This is a quick guide for implementing DnDB, plese read the documentation for a deeper knowleadge. <br> 
           <b class="text-bold">The version number on this quick guide is always the latest release available</b>.
        </p>
        <h1 class="mt-10 text-main-color text-3xl inline-block">Importing</h1>
          <pre v-highlightjs><code class="javascript bg-black">
import Datastore from 'https://deno.land/x/dndb@{{version}}/mod.ts'
// OR
import Datastore from 'https://x.nest.land/dndb@{{version}}/mod.ts'</code></pre>
        <h1 class="mt-10 text-main-color text-3xl inline-block">Instantiating</h1>
        <pre v-highlightjs><code class="javascript bg-black">
const collection = new Datastore({ 
  filename:"./database.db", 
  autoload: true 
})</code></pre>
      <h1 class="mt-10 text-main-color text-3xl inline-block">Usage</h1>

      <h1 class="mt-10 text-main-color text-xl">Inseting documents</h1>
      <pre v-highlightjs><code class="javascript bg-black">
let insertion = await collection.insert({ username:'Denyn' });
//or
let insertion = await collection.insert([{ username:'Denyn' }, { username: 'Marc' }]);
</code></pre>
      <h1 class="mt-10 text-main-color text-xl inline-block">Finding documents</h1>
<pre v-highlightjs><code class="javascript bg-black">
let user = await collection.findOne({ username: 'Denyn' });
// or
let users = await collection.find({ username: 'Denyn' });
</code></pre>
      <h1 class="mt-10 text-main-color text-xl inline-block">Updating documents</h1>
<pre v-highlightjs><code class="javascript bg-black">
let update = await collection.updateOne({ username:'Denyn' }, { $set: { username: 'Denyncrawford' } });
// or
let updates = await collection.update({ username:'Denyn' }, { $set: { username: 'Denyncrawford' } });
</code></pre>
      <h1 class="mt-10 text-main-color text-xl inline-block">Removing documents</h1>
<pre v-highlightjs><code class="javascript bg-black">
let removed = await collection.removeOne({ username:'Denyn' });
// or
let removed = await collection.remove({ username:'Denyn' });
</code></pre>
      </div>
    </page>
    <page bg="bg-black">
        <div class="bg-black justify-center w-full flex flex-col text-center">
          <h1 class="mx-auto text-center text-main-color text-5xl max-w-xl mt-10 mb-10">Don't you know where to start?</h1>
          <p class="mb-10 text-gray-80">Try this points to know more about with DnDB</p>
          <div class="w-9/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-20">
            <div class="p-10 rounded-2xl flex flex-col transform hover:scale-110 justify-center hover:border border-2 transition duration-200 hover:border-main-color">
              <h1 class="text-3xl max-w-xl mb-5">The Project</h1>
              <div class="mb-5 flex">
                <i class="mx-auto stroke-current text-main-color" data-feather="plus"></i>
              </div>
              <p class="mb-5">Know more about this and other projects by Crawford.</p>
              <el-button type="primary" @click="go('why')" class="hover:text-black bg-transparent text-white mt-auto text-black">Read</el-button>
            </div>
            <div class="p-10 rounded-2xl flex flex-col transform hover:scale-110 justify-center border border-2 transition duration-200 hover:border-main-color">
              <h1 class="text-3xl max-w-xl mb-5">Documentation</h1>
              <div class="mb-5 flex">
                <i class="mx-auto stroke-current text-main-color" data-feather="book-open"></i>
              </div>
              <p class="mb-5">Read the Documentation to learn about the DnDB API</p>
              <el-button type="primary" @click="go('docs')" class="hover:text-black bg-transparent text-white mt-auto text-black">Get Started</el-button>
            </div>
            <div class="p-10 rounded-2xl flex flex-col border transform hover:scale-110 border-2 transition duration-200 hover:border-main-color">
              <h1 class="text-3xl max-w-xl mb-5">Starter Demo</h1>
                <div class="mb-5 flex">
                  <i class="mx-auto stroke-current text-main-color" data-feather="codesandbox"></i>
                </div>
              <p class="mb-5">Make a quick test using Dndb on a server environment</p>
              <el-button type="primary" class="mt-auto hover:text-black bg-transparent text-white text-black">Run the starter</el-button>
            </div>
          </div>
        </div>
    </page>
    </div>
</template>

<script>
import Page from '../components/structure/Page.vue'
import TypeIt from "typeit";
import { computed } from 'vue'
import { useStore } from 'vuex'
import Rellax from "rellax"
import { replace } from 'feather-icons'

export default {
  name: 'App',
  data() {
    return {
      title: "The database engine for the Denosaurs.",
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
    },
    go(page) {
      this.$router.push(`/${page}`)
    }
  },
  async mounted() {
    replace()
    this.version = this.$store.state.version
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
    Page,
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

    .hljs {
      background: black;
    }
</style>