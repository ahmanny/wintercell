<template>
  <v-layout row justify-center class="">
    <v-dialog v-model="dialog" max-width="470px" persistent>
      <v-card class="!p-7 !rounded-xl" height="548px">
        <div>
          <div class="flex">
            <p class="pTag pb-3 grow">Latecoming process</p>
            <h1>
              <button class="mr-2 text-gray-500">
                <v-icon>mdi-dots-horizontal</v-icon>
              </button>
              <button @click="toggle" class="text-gray-500">
                <v-icon>mdi-close</v-icon>
              </button>
            </h1>
          </div>
          <h1 class="headingCard pb-3">Latecoming request message</h1>
        </div>
        <div class="mt-auto">
          <v-text-field
            v-model="message"
            id="message"
            variant="outlined"
            color="blue"
            base-color="grey"
            append-inner-icon=""
            ><template #append-inner>
              <button class="hover:text-blue-600">
                <v-icon>mdi-emoticon-outline</v-icon>
              </button>
            </template></v-text-field
          >
          <v-btn flat color="blue" height="50" class="text-subtitle-1 !w-full"
            >Send message</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: ['toggle'],
  data() {
    return {
      dialog: true,
      message: "",
    };
  },
  methods:{
  }
};
</script>

<style></style>
