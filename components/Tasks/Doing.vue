<template>
  <div class=" bg-gray-100 rounded-lg h-48 w-80 mt-5 p-[10px] mr-6">
    <div>
      <div class="flex todo">
        <div class="grow">
          <h1>Doing <span class="numb">0</span></h1>
        </div>
      </div>
      <div
        v-for="tasks in doing"
        :key="tasks.title"
        class="block bg-white p-[16px] rounded-lg m-1"
      >
        {{ tasks.title }}
        <div class="flex mt-5">
          <div class="grow text-gray-400 font-medium text-sm">
            <p>
              <v-icon class="!text-xl pr-2">mdi-clock-outline</v-icon
              >{{ tasks.time }}
            </p>
          </div>
          <div>
            <img src="/avaters/avater1.svg" class="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      doing: [
        { title: "Create product requirements document (PRD)", time: "24 Oct" },
      ],
    };
  },
};
</script>
