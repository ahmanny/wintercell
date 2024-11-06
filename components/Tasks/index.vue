<template>
  <div class="flex max-w-[1240px]">
    <div class="grow"><h1 class="titleCard">Tasks</h1></div>
    <div class="titleCard">
      <v-btn prepend-icon="mdi-timer-outline" flat @click="toggle">{{ timertitle }}</v-btn>
      <span
        ><v-btn flat size="small" class="text-subtitle-1"
          ><v-icon>mdi-magnify</v-icon></v-btn
        ></span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["toggle"],
  data() {
    return {
      timertitle:"Timer"
    };
  },
};
</script>
