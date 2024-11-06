<template>
  <div class="flex justify-center items-center h-lvh">
    <div>
      <img src="/assets/clip-fatal-error.svg" />
      <p class="text-center pTag w-72 mt-10">
        {{ msg }} {{ msgothers }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props:['msg','msgothers']
}
</script>