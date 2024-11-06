<template>
  <div class="py-6 px-5">
    <div class="flex justify-end pb-3">
      <v-btn flat size="xsmall" @click="markAllRead"
        ><p class="pTag pb-0">Mark all as read</p></v-btn
      >
    </div>
      <div
        class="flex items-center mb-7 hover:bg-slate-100 py-2 cursor-pointer"
        v-for="(item,i) in notificationsList"
        :key="i"
        @click="mark_Read(i)"
      >
        <v-avatar size="6" color="black" v-if="item.read"></v-avatar>
        <v-card-item :prepend-avatar="item.avatar" class="!px-3"> </v-card-item>
        <div>
          <h1 class="pTag pb-0">
            <span class="font-semibold">{{ item.name }}</span>{{ item.content }}
          </h1>
          <p class="items-center flex !font-semibold text-sm text-blue-700">
            <v-icon size="xsmall" class="!mr-2">{{ item.teamIcon }}</v-icon>{{ item.team }}
          </p>
          <h1 class="pTag pb-0">{{item.dateDone}}</h1>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  setup() {
    const notifications = useMyNotificationsStore();
    return { notifications };
  },
  data() {
    return {
      notificationsList: "",
      show:false
    };
  },
  mounted() {
    this.notificationsList = this.notifications.notification;
  },
  methods:{
    markAllRead(){
      this.notifications.markALLread()
    },
    mark_Read(index){
      this.notificationsList[index].read = false
      this.notifications.mark_Read(index)
    }
  }
};
</script>
