<template>
  <div :class="bg" class="page relative container max-w-full min-h-screen w-screen px-10 py-10 flex flex-col">
    <div>
      <h1 v-if="title" class="inline px-5 py-2 font-bold uppercase text-gray-700">{{title}}</h1>
    </div>
    <div class="min-h-screen" :class="{title:'mt-10'}">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title","bg"]
}
</script>

<style scoped>
  * {
    color: white;
  }
  h1 {
    color: #00ffa8;
  }
</style>