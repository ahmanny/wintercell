<template>
  <NuxtLayout>
    <v-main class="pa-o">
      <div>hello world</div>
    </v-main>
  </NuxtLayout>
</template>
<script>
export default {
  setup() {
  },
  data() {
    return {
      timer: false,
      sun: "",
      name: "",
      ListItem: [],
      longText: `This is a very long paragraph that should be truncated after a certain number of characters. 
          You can click the 'Read More' button to see the full text or 'Read Less' to collapse it again.`,
    };
  },
  mounted() {},
  methods: {
    toggle() {
      this.timer = !this.timer;
    },
  },
};
</script>
