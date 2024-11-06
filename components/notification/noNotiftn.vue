<template>
    <div class="flex justify-center">
      <div class=" pt-36">
        <img src="/assets/clip-fatal-error.svg" width="310"/>
        <p class="text-center mt-14 pTag">
          {{ msg }}
        </p>
      </div>
    </div>
  </template>
  <script>
  export default {
    props:['msg']
  }
  </script>