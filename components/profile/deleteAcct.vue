<template>
  <v-layout row justify-center class="">
    <v-dialog v-model="dialog" max-width="470px" persistent flat variant="flat">
      <v-card class="!p-10 !rounded-xl">
        <div class="flex">
          <h1 class="text-xl font-semibold mb-6 grow">Delete your account</h1>
          <h1>
            <button @click="toggle" class="text-gray-500">
              <v-icon>mdi-close</v-icon>
            </button>
          </h1>
        </div>
        <div>
          <p class="text-gray-500 mb-4">
            This action is permanent and cannot be reversed. You will lose
            access to this workspace and all projects, tasks, schedules,
            check-ins and files.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-6 mt-6">
          <v-btn
            color="red"
            flat
            variant="outlined"
            height="50px"
            @click="toggle"
            >Oops, never mind</v-btn
          >
          <v-btn
            color="red"
            flat
            height="50px"
            @click="deleteAccount"
            :loading="loading"
            >Delete</v-btn
          >
        </div>
      </v-card>
    </v-dialog></v-layout
  >
</template>
<script>
export default {
  props: ["toggle"],
  data() {
    return {
      dialog: true,
      loading: false,
    };
  },
  methods: {
    deleteAccount() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        console.log("delete Account");
      }, 1000);
    },
  },
};
</script>
