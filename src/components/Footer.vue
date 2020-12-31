<template>
  <div class="bg-black">
    <div class="py-20 px-5 px-8 sm:px-20 bg-main-color w-full">
      <h1 class="mb-20 text-black text-center text-3xl block">Support DnDB</h1>
      <!--Previous content:-->
      <!-- <p class="mt-2 max-w-prose">By supporting DnDB you can maintain this and other projects and promote yours at the same time. <a href="https://github.com/denyncrawford" target="_blank" rel="noopener noreferrer">Contact us</a> to find out more about the DnDB spotlight.</p> -->
      <!-- <a class="mt-5 sm:mt-auto sm:ml-auto my-auto" href="https://github.com/denyncrawford" target="_blank" rel="noopener noreferrer"><el-button class="bg-transparent border-black hover:bg-black hover:text-main-color text-black">Support DnDB</el-button></a> -->
      <div
        class="mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 md:mb-20"
      >
        <div
          class="md:my-8 md:ml-8 border-double border-8 border-gray-900 p-5 rounded-2xl transform hover:scale-110 hover:border transition duration-200 hover:border-main-color"
        >
          <i class="mt-3 block mx-auto" data-feather="git-pull-request"></i>
          <h2 class="text-center text-2xl max-w-xl my-5">Join the community</h2>
          <p class="text-center">
            Give us a star and contribute to the project.
          </p>
          <a
            class="bg-yellow-400 el-button border-solid border-2 border-gray-900 mt-5 text-black"
            href="https://github.com/denyncrawford/dndb" target="_blank" rel="noopener noreferrer"
            data-v-c5362648=""
            data-v-a5f3b890-s=""
            ><span
              ><i class="h-5 inline mx-auto" data-feather="star"></i> Star</span
            ></a
          >
          <a
            class="el-button el-button--primary mt-5 text-black"
            href="https://github.com/denyncrawford/dndb" target="_blank" rel="noopener noreferrer"
            data-v-c5362648=""
            data-v-a5f3b890-s=""
            ><span
              ><i class="h-5 inline mx-auto" data-feather="github"></i> Fork
            </span></a
          >
        </div>
        <div
          class="flex flex-col justify-around border-solid border-8 border-gray-900 p-5 pb-4 rounded-2xl transform hover:scale-110 transition duration-200"
        >
          <i class="mt-3 block mx-auto" data-feather="award"></i>
          <div>
            <h2 class="text-center text-2xl max-w-xl mb-5">Become a sponsor</h2>
            <p class="text-center">
              Help us improve DnDB and reach a large audience of innovative
              developers that is already using DnDB.
              <strong>Get featured in our landing page</strong>, docs and
              repository.
            </p>
          </div>
          <a
            class="w-full bg-yellow-400 el-button border-solid border-2 border-gray-900 mt-5 text-black"
            href="#"
            data-v-c5362648=""
            data-v-a5f3b890-s=""
            ><span>Join the spotlight</span></a
          >
        </div>
        <div
          class="md:my-8 md:mr-8 border-double border-8 border-gray-900 p-5 rounded-2xl transform hover:scale-110 hover:border transition duration-200 hover:border-main-color"
        >
          <i class="mt-3 block mx-auto" data-feather="gift"></i>
          <h2 class="text-center text-2xl max-w-xl my-5">One-time donation</h2>
          <p class="text-center">
            If you are deriving great value from DnDB, throw a penny to help us
            develop new exciting features.
          </p>
          <a
            class="el-button el-button--primary mt-5 text-black"
            href="#get-started"
            data-v-c5362648=""
            data-v-a5f3b890-s=""
            ><span
              ><i class="h-5 inline mx-auto" data-feather="credit-card"></i>
              Donate with PayPal
            </span></a
          >
        </div>
      </div>
      
    </div>
  </div>
  <div class="px-10 sm:px-40 flex items-center py-10">
    <div>
      <h1 class="sm:text-lg text-main-color">© 2020 Crawford</h1>
      <p class="text-sm text-gray-400">
        A module by
        <a
          class="text-main-color"
          href="https://github.com/denyncrawford"
          target="_blank"
          rel="noopener noreferrer"
          >denyncrawford</a
        >. <br />
        Made with 💚 for the Deno community.
      </p>
    </div>
    <div class="flex ml-auto">
      <a target="_blank" href="https://nest.land/package/dndb">
        <img
          width="25"
          src="https://nest.land/images/nest.land/logo_dark.svg"
          alt=""
        />
      </a>
      <a target="_blank" href="https://github.com/denyncrawford/dndb">
        <img
          width="25"
          class="ml-4"
          src="https://cse.msu.edu/~sydlikb1/assets/github.png"
          alt=""
        />
      </a>
      <a target="_blank" href="https://deno.land/x/dndb">
        <img
          width="25"
          class="ml-4 invert"
          src="https://cdn.worldvectorlogo.com/logos/deno-1.svg"
          alt=""
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.invert {
  filter: invert(1);
}
</style>