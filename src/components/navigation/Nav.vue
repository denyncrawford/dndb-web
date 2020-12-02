<template>
  <div class="p-5 z-20 fixed flex w-full justify-center">
    <router-link class="flex items-center bg-opacity-0" :to="{name:'Home', path:'/'}">
      <img class="logo" src="../../assets/dndblogo.png" :if="image">
      <h1 class="font-bold ml-2 text-white" :if="title">{{title}}</h1>
    </router-link>
    <ul class="ml-auto flex items-center" :if="link">
      <router-link class="link ml-5" v-for="(item, i) in links" :to="item.to" :key="i">
        {{item.displayname}}
      </router-link>
      <li @click="openGithub" class="ml-5 link">
        <i data-feather="github"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { replace } from 'feather-icons'
export default {
  data() {
    return {
      githubUrl: 'https://github.com/denyncrawford/dndb'
    }
  },
  setup(){
    let router = useRouter();
    let activeLink = null;
    router.beforeEach((to, from) => {
      activeLink = to.path;
    })
    return {
      activeLink
    }
  },
  props: ['title','image','links'],
  mounted() {
    replace()
  },
  methods: {
    openGithub() {
      window.open(this.githubUrl, '_blank');
    }
  }
}
</script>

<style scoped>
  .logo {
    max-width: 20px;
    max-height: 20px;
  }
  .feather {
    width: 16px;
    height: 16px;
    stroke: gray;
  }
  .feather:hover {
    stroke:#00FFA8;
  }
  .link {
    transition: color .2s;
    color: #606266;
    cursor: pointer;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    background-color: transparent;
    text-decoration: none;
    outline: 0;
    padding: 0;
    font-weight: 500;
    font-size: 14px;
  }

  .link:hover, .router-link-exact-active {
    color: #00FFA8;
  }
  .link::after {
    content: "";
    background: #00FFA8;
    height: 1px;
    position: absolute;
    bottom: 0;
    transition: .16s all 0.025s; 
  }
  .link::after {
    left: 100%;
    right: 0;
  }

  .link:hover ~ .link::after {
    left: 0;
    right: 100%;
  }

  .link:hover::after {
    left: 0;
    right: 0;
  }
  
  * {
    color: white;
  }

  @keyframes anchor-underline {
  0%, 10% {
    left: 0;
    right: 100%;
  }
  40%, 60% {
    left: 0;
    right: 0;
  }
  90%, 100% {
    left: 0%;
  }
}
</style>