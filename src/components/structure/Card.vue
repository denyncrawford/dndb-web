<template>
  <div class="p-10 rounded-2xl flex flex-col justify-center border border-2 transition duration-200 hover:border-main-color">
    <h1 class="text-3xl max-w-xl mb-5">The Project</h1>
    <div class="mb-5 flex">
      <i class="mx-auto stroke-current text-main-color" data-feather="plus"></i>
    </div>
    <p>Know more about this and other projects by Crawford.</p>
    <el-button type="primary" class="hover:text-black bg-transparent text-white mt-5 text-black" @click="increment">Read</el-button>
  </div>
</template>

<script>
export default {
  props: ['icon','title','desc','link']
}
</script>