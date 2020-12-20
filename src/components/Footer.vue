<template>
  <div class="bg-black">
      <div class="justify-center py-20 px-40 bg-main-color w-full flex">
        <div>
          <h1 class="text-black text-3xl inline-block">Do you want to back this project?</h1>
          <p class="mt-2 max-w-prose">By supporting DnDB you can maintain this, other projects and promote yours at the same time, know more about the DnDB sopotlight.</p>
        </div>
        <el-button class="ml-auto my-auto bg-transparent border-black hover:bg-black hover:text-main-color text-black">Support DnDB</el-button>
      </div>
    </div>
  <div class="px-40 flex items-center py-10">
    <div>
      <h1 class="text-lg text-main-color">© 2020 Crawford</h1>
      <p class="text-sm text-gray-400">A module by denyncrawford. <br> Made with 💚 for the Deno community.</p>
    </div>
    <div class="flex ml-auto">
        <img width=25 src="https://nest.land/images/nest.land/logo_dark.svg" alt="">
        <img class="ml-4" width=25 src="https://cse.msu.edu/~sydlikb1/assets/github.png" alt="">
        <img class="ml-4 invert" width=25 src="https://cdn.worldvectorlogo.com/logos/deno-1.svg" alt="">
      </div>
  </div>
</template>

<style scoped>
  .invert {
    filter: invert(1);
  }
</style>