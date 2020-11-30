<template>
  <div class="page container max-w-full h-screen w-screen px-10 py-10 flex flex-col">
    <div>
      <h1 v-if="title" class="inline px-5 py-2 font-bold uppercase text-gray-700">{{title}}</h1>
    </div>
    <div class="h-full" :class="{title:'mt-10'}">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
}
</script>

<style scoped>
  .page {
    background-color: black;
  }
  * {
    color: white;
  }
  h1 {
    color: #00ffa8;
  }
</style>