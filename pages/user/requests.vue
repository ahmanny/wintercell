<script setup>
definePageMeta({
  layout: "user-layout",
});
</script>

<template>
  <NuxtLayout>
    <RequestsComposeMsg v-if="composeMsg" :toggle="toggle"/>
    <h1 class="titleCard">Requests</h1>
    <div>
      <v-tabs v-model="tab">
        <v-tab value="one" color="blue">By you</v-tab>
        <v-tab value="two" color="blue">By others</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          <RequestsNoRequest v-if="noRequest" :msg="msg" />
          <RequestsYesRequest :toggle="toggle" v-if="request"/>
        </v-tabs-window-item>
        <v-tabs-window-item value="two">
          <RequestsNoRequest v-if="noOTrequest" :msgothers="msgothers"/>
          <RequestsReqByOthers/>
        </v-tabs-window-item
        >
      </v-tabs-window>
    </div>
  </NuxtLayout>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      request:true,
      noOTrequest: false,
      noRequest: false,
      composeMsg: false,
      msg:"No request message. Begin by launching a process with a request message",
      msgothers:"You have not received any requests",
    };
  },
  methods: {
    toggle() {
      this.composeMsg = !this.composeMsg
    },
  },
};
</script>
<style scoped></style>
