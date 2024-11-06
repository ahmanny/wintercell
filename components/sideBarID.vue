<template>
  <div>
    <ClientOnly >
      <v-list-item
      v-for="(item, i) in ListItem"
      :key="i"
      :prepend-avatar="item.avater"
      rounded
      :value="item"
      color="blue"
      :prepend-icon="item.icon"
      class="custom-list-item mt-4 !capitalize !text-sm"
      :to="`${item.route}/${item.id||'not found'}`"
      >
      {{ item.name }}
    </v-list-item>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  props: ["ListItem"],
};
</script>

<style></style>
