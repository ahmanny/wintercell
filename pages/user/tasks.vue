<script setup>
definePageMeta({
  layout: "user-layout",
});
</script>
<template>
  <NuxtLayout>
    <timer v-if="timer" :toggle="toggle"/>
    <Tasks :toggle="toggle"/>
    <ClientOnly>
    <v-tabs v-model="tab">
      <v-tab v-for="(item, i) in tabs" :key="i" :value="i" color="blue">{{
        item.title
      }}</v-tab>
    </v-tabs>
    <div>
      <v-btn variant="plain" prepend-icon="mdi-tune" size="small" class="border"
        >Filter</v-btn
      ><span
        ><v-btn
          size="small"
          flat
          class="border text-black"
          append-icon="mdi-chevron-down"
          >Due today</v-btn
        ></span
      >
    </div>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="one"><Yourtasks /></v-tabs-window-item>

      <v-tabs-window-item value="two"> Two </v-tabs-window-item>

      <v-tabs-window-item value="three"> Three </v-tabs-window-item>

      <v-tabs-window-item value="four"> Three </v-tabs-window-item>
    </v-tabs-window>
  </ClientOnly>
  </NuxtLayout>
</template>
<script>
export default {
  name: "tasks",
  data() {
    return {
      tab: null,
      timer: false,
      tabs: [
        { title: "Your tasks" },
        { title: "Assigned by you" },
        { title: "Blocking you" },
        { title: "Blocking by you" },
      ],
    };
  },
  methods: {
    toggle() {
      this.timer = !this.timer;
    },
  },
};
</script>
<style scoped></style>
