<template>
  <div>
    <v-text-field
      class="mt-3"
      id="members"
      variant="outlined"
      :placeholder="placeholder"
      prepend-inner-icon="mdi-magnify"
      v-model="searchQuery"
      color="blue"
    ></v-text-field>
    <v-list class="border -mt-[22px] mb-5 circle" density="compact">
      <v-list-item
        v-for="(item, i) in searchItems(searchQuery)"
        :key="i"
        :value="i"
        :prepend-icon="item.icon"
        @click="addToList(item, item.id)"
        :prepend-avatar="item.avatar"
      >
        <v-list-item-title class="!font-semibold"
          >{{ item.name }}
          <span class="!font-normal">{{ item.job }}</span></v-list-item-title
        >
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
    props: [ "items","addToList","placeholder"],
    data(){
        return{
            searchQuery:"",
        }
    },
    methods:{
      searchItems(query) {
      return this.items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
    },
    }
};
</script>
