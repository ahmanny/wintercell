<template>
  <div class=" bg-gray-100 rounded-lg h-48 w-80 mt-5 p-[10px] mr-6">
    <div>
      <div class="flex todo container">
        <div class="grow pt-1">
          <h1>
            To do
            <span class="numb">{{
              ToDo.length
            }}</span>
          </h1>
        </div>
        <div class="">
          <v-btn
            prepend-icon="mdi-plus"
            variant="text"
            class="font-weight-bold !p-0 add"
            @click="addTasks"
            >Add tasks</v-btn
          >
        </div>
      </div>
      <div v-for="tasks in ToDo" :key="tasks.title" class="block bg-white p-[16px] rounded-lg mt-2">
        {{ tasks.title }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ToDo: [
        { title: "Conduct usability testing session with selected users" },
      ],
    };
  },
  methods:{
    addTasks(){
      // add a task to Todo list
    }
  }
};
</script>
<style>
.todo {
  color: #31424f !important;
}
</style>
