<template>
  <div>
    <v-layout>
      <v-dialog v-model="dialog" fullscreen persistent>
        <v-card class="!bg-slate-100">
          <div class="top flex p-2 items-center bg-white">
            <div class="flex-none">
              <v-btn
                flat
                size="xsmall"
                class="!text-xl !p-2"
                @click="createNewProcess"
                ><v-icon>mdi-close</v-icon></v-btn
              >
            </div>
            <div class="grow flex justify-center">
              <h1 class="font-semibold">
                Untitled
                <span class="text-xs"
                  ><v-btn size="xsmall" flat class=" !p-2"
                    ><v-icon class="border-b-2 border-black"
                      >mdi-pencil-outline</v-icon
                    ></v-btn
                  ></span
                >
              </h1>
            </div>
            <div class="flex-none">
              <v-btn color="blue" flat size="small" class="px-4">Save</v-btn>
            </div>
          </div>
          <div
            class="bg-white absolute mt-[35vh] ml-2 w-[60px] py-4 rounded-lg"
          >
            <v-list-item>
              <v-icon>mdi-check-circle-outline</v-icon>
            </v-list-item>
            <v-list-item>
              <v-icon>mdi-calendar-outline</v-icon>
            </v-list-item>
            <v-list-item>
              <v-icon>mdi-message-text-outline</v-icon>
            </v-list-item>
            <v-list-item>
              <v-icon>mdi-clipboard-outline</v-icon>
            </v-list-item>
          </div>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ["createNewProcess"],
  data() {
    return {
      dialog: true,
    };
  },
};
</script>
