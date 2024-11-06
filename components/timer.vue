<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="460px" persistent>
      <v-card class="!p-7">
        <div class="flex">
          <h1 class="font-bold text-xl mb-5 grow">Timer</h1>
          <h1>
            <button @click="toggle"><v-icon>mdi-close</v-icon></button>
          </h1>
        </div>
        <div v-for="time in times" :key="time.title">
          <div class="my-5 bg-slate-100 ml-4 p-3">
            <p class="pTag">
              <span class="rounded-full px-[6px] text-xs bg-blue-700"></span>
              {{ time.title }}
            </p>
            <div class="flex">
              <div class="grow">
                <p class="text-sm pb-1">Alloted</p>
                <h1 class="font-semibold">{{ time.alloted }}</h1>
              </div>
              <div class="grow">
                <button>
                  <v-avatar class="!bg-blue-700" @click="play">
                    <v-icon class="!text-white !text-3xl">{{
                      time.icon
                    }}</v-icon>
                  </v-avatar>
                </button>
              </div>
              <div class="grow">
                <p class="text-sm pb-1">Spent</p>
                <h1 class="font-semibold">{{ time.spent }}</h1>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  props: ["toggle"],
  data() {
    return {
      dialog: true,
      times: [
        {
          title: "Create product requirements document (PRD)",
          alloted: "01h 30m 00s",
          spent: "00h 00m 00s",
          icon: "mdi-play",
        },
        {
          title: "Setup servers",
          alloted: "02h 15m 00s",
          spent: "02h 10m 57s",
          icon: "mdi-pause",
        },
        {
          title: "Conduct user research",
          alloted: "00h 45m 00s",
          spent: "00h 56m 45s",
          icon: "mdi-play",
        },
      ],
    };
  },
  methods: {
    play() {
      this.times.title = "mdi-play";
      // this.dialog=false
    },
  },
};
</script>
