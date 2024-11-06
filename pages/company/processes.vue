<script setup>
definePageMeta({
  layout: "company-layout",
});
</script>

<template>
  <NuxtLayout>
    <div>
      <h1 class="titleCard">PROCESSES</h1>
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
      <CompanyAddNewprocess v-if="add_pro" :createNewProcess="createNewProcess"/>
    </div>
  </NuxtLayout>
</template>
<script>
export default {
  data() {
    return {
      add_pro:false
    };
  },
  methods:{
    createNewProcess(){
      this.add_pro = !this.add_pro
    }
  }
};
</script>
<style scoped></style>
