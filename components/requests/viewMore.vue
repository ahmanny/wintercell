<template>
  <v-layout row justify-center class="">
    <v-dialog v-model="dialog" max-width="470px" persistent flat variant="flat">
      <v-card class="!p-7 !rounded-xl">
        <div>
          <div class="flex">
            <p class="pTag pb-3 grow">{{ numb.subtitle }}</p>
            <h1>
              <button @click="clicked" class="text-gray-500">
                <v-icon>mdi-close</v-icon>
              </button>
            </h1>
          </div>
          <div>
            <h1 class="headingCard pb-3">{{ numb.title }}</h1>
            <p class="text-gray-500 mb-4">{{ numb.content }}</p>
            <h1 class="font-semibold">{{ numb.date }}</h1>
            <v-chip small :class="numb.status">{{ numb.status }}</v-chip>
          </div>
        </div>
        <div></div>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: ["numb", "clicked"],
  data() {
    return {
      dialog: true,
    };
  },
  methods: {},
};
</script>

<style></style>
