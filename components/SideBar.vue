<template>
  <div>
    <v-list-item
      v-for="(item, i) in ListItem"
      :key="i"
      :title="item.title"
      :prepend-avatar="item.avater"
      rounded
      :value="item"
      color="blue"
      :prepend-icon="item.icon"
      class="custom-list-item mt-4 !capitalize !text-sm"
      :to="{ name: item.route }"
    ></v-list-item>
  </div>
</template>

<script>
export default {
  props: ["ListItem"],
};
</script>

<style>
</style>
