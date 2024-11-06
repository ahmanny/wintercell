<template>
  <div class="flex flex-wrap">
    <div
      class="bg-white rounded-lg w-[370px] mt-10 mr-auto p-8 cursor-pointer"
      v-for="(request,i) in requests"
      :key="i"
      @click="clicked(request)"
    >
      <p class="pTag pb-3 text-gray-500">{{ request.subtitle }}</p>
      <h1 class="headingCard pb-3">{{ request.title }}</h1>
      <readmore :longText="request.content" />
      <div class="flex">
        <v-list-item prepend-avatar="\avater1.svg" class="!pl-0">{{ request.name }}</v-list-item>
        <RequestsOthersViewmore
          :request="list"
          v-if="isExpanded"
          :clicked="clicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["toggle"],
  data() {
    return {
      isExpanded: false,
      list: {},
      requests: [
        {
          subtitle: "Latecoming process",
          title: "Latecoming request message",
          content:
            "At the edge of forever cosmos kindling the energy hidden in matter Rig Veda network of wormholes great turbulent clouds. Across the centuries rich in mystery the sky calls to us from which we spring citizens of distant epochs another world. The ash of stellar alchemy with pretty stories for which there's little good evidence a mote of dust suspended in a sunbeam a mote of dust suspended in a sunbeam a mote of dust suspended in a sunbeam how far away?",
          avater: "/avater1.svg",
          name: "Jonathan Ive",
          date:"Today, 8:30am"
        },
      ],
    };
  },
  methods: {
    clicked(numb) {
      this.isExpanded = !this.isExpanded;
      this.list = numb;
      console.log(this.list);
    },
  },
};
</script>

<style></style>
