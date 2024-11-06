<template>
  <div class="flex flex-wrap">
    <div
      class="bg-white rounded-lg w-[370px] mr-[60px] mt-10 flex justify-center items-center h-[240px]"
    >
      <div>
        <div class="grid grid-cols-3 mb-3">
          <h1 class="col-span-1"></h1>
          <v-btn
            flat
            class="!text-2xl col-span-1 !p-5 !rounded-full !bg-[#F4F7FB]"
            @click="createNewProcess"
            prependIcon="mdi-plus"
            size="xsmall"
          ></v-btn>
          <h1 class="col-span-1"></h1>
        </div>
        <h1 class="flex justify-center text-lg font-medium">
          Create new process
        </h1>
      </div>
    </div>
    <div class="bg-white rounded-lg w-[370px] mr-[60px] h-[240px] p-8 mt-10">
      <h1 class="headingCard pb-3">New client project</h1>
      <p>
        Process and workflow for managing new client projects after closing
        deals.
      </p>
      <div class="bottom-7 absolute">
        <v-btn
          class="px-7 !border mr-4"
          flat
          @click="viewProject"
          :loading="loading"
          >View</v-btn
        >
        <v-btn
          class="px-7 !border"
          color="blue"
          flat
          @click="lunchProject"
          :loading="loadin"
          >Launch</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      loadin: false,
    };
  },
  methods: {
    viewProject() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    lunchProject() {
      this.loadin = true;
      setTimeout(() => {
        this.loadin = false;
      }, 1000);
    },
    createNewProcess(){

    },
  },
};
</script>

<style></style>
