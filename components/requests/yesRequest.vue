<template>
  <div class="flex flex-wrap">
      <div class="bg-white rounded-lg w-[330px] mr-[20px] p-6 mt-10">
          <p class="pTag pb-3">Latecoming process</p>
          <h1 class="headingCard pb-3">Latecoming request message</h1>
          <p class="">
            You have not sent a request message yet.
          </p>
          <v-btn color="blue" class="px-7 !-bottom-8" flat @click="toggle">Compose message</v-btn>
      </div>
    <div
      class="bg-white rounded-lg w-[330px]  mr-[20px] p-6 cursor-pointer mt-10"
      v-for="(numb,i) in requestList"
      :key="i"
      @click="clicked(numb)"
    >
      <p class="pTag pb-3 text-gray-500">{{ numb.subtitle }}</p>
      <h1 class="headingCard pb-3">{{ numb.title }}</h1>
      <readmore :longText="numb.content" />
      <v-chip small :class="numb.status">{{ numb.status }}</v-chip>
      <requests-view-more :numb="list" v-if="yes" :clicked="clicked"/>
    </div>
  </div>
</template>

<script>
export default {
  props:['toggle'],
  data() {
    return {
      // isExpanded: false,
      yes:false ,
      list:{},
      requestList: [
        {
          subtitle: "Day off process",
          title: "Day off request message",
          content:
            "Observer extraordinary claims require extraordinary evidence are creatures of the cosmos. Globular star cluster Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, pariatur?",
          status: "Pending",
          date:"Today, 8:30am"
        },
        {
          subtitle: "Latecoming process",
          title: "Latecoming request message",
          content:
            "Vanquish the impossible vanquish the impossible stirred by starlight Drake Equation a mote of Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, pariatur?",
          status: "Declined",
          date:"yesterday, 11:30pm"
        },
      ],
    };
  },
  methods:{
    clicked(numb){
      this.yes=!this.yes
      this.list=numb
    }
  }
};
</script>

<style></style>
