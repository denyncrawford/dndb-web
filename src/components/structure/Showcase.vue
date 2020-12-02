<template>
  <div class="w-full grid-rows-3">
    <div class="p-10 rounded border border-2 border-main-color" v-for="(item,k) in items" :key="k">
      <div>
        <h1>
          {{item.title}}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>
