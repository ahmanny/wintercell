<template>
  <v-layout row justify-center class="">
    <v-dialog v-model="dialog" max-width="470px" persistent flat variant="flat">
      <v-card class="!p-7 !rounded-xl">
        <div>
          <div class="flex">
            <p class="pTag pb-3 grow">{{ request.subtitle }}</p>
            <h1>
              <button @click="clicked" class="text-gray-500">
                <v-icon>mdi-close</v-icon>
              </button>
            </h1>
          </div>
          <div>
            <h1 class="headingCard mb-6">{{ request.title }}</h1>
            <p class="text-gray-500 mb-4">{{ request.content }}</p>
            <v-list-item prepend-avatar="\avater1.svg" class="!pl-0">
              <h1 class="font-bold">{{ request.name }}</h1>
              <h4>{{ request.date }}</h4>
            </v-list-item>
          </div>
          <div class=" grid grid-cols-2 gap-6 mt-16">
            <v-btn color="red" flat variant="outlined" height="50px">Reject</v-btn>
            <v-btn color="blue" flat height="50px">Approve</v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: ["request", "clicked"],
  data() {
    return {
      dialog: true,
    };
  },
  methods: {},
};
</script>

<style></style>
