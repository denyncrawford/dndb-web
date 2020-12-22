<template>
  <div>
    <page>
      <div class="sm:ml-32">
        <h1 class="text-main-color mt-32 text-5xl max-w-xl">Why DnDB?</h1>
        <p class="mt-10 max-w-prose">This project arises from the need for a database for Deno. Now there are a few :D, but at the time we were pioneers. 
        <br><br>
        We always keep advancing and improving DnDB, making it a reliable and stable module for production.</p>
        <h1 class="text-main-color mt-32 text-5xl max-w-xl">Is DnDB da wae?</h1>
        <p class="mt-10 max-w-prose">DnDB is an optimized data store made for the Deno runtime, with no bottlenecks or exaggerated load times. This is made possible by not holding all the data in memory.
        <br><br>
        Right now all the 'databases' and data stores available for Deno are loading (into memory) the entire collection to read and write the data. This is not an optimal solution when it comes to a production environment where data tends to grow. 
        <br><br>
        <span class="text-main-color">DnDB is designed to stream and buffer the data store in chunks, making it perfect for handling large data sets without compromising performance.</span>
        </p>
        <h1 class="text-main-color mt-32 text-5xl max-w-xl">But Wait...</h1>
        <p class="mt-10 max-w-prose">DnDB is a small project waiting for contribution. <span>It is not a driver</span> for any existent engine,
        but a possible database engine that is growing with Deno.
        <br><br>
        If you need something ready for production, there are some well known driver APIS available at Deno third parties too.
        But if you want to support the Deno comunity by creating awesome stuff with our awesome stuff...
        <span class="text-main-color">This is the wae</span>.
        </p>
      </div>
    </page>
  </div>
</template>

<script>
import Page from '../components/structure/Page.vue'
export default {
  components: {
    Page
  }
}
</script>