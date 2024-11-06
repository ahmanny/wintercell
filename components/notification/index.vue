<template>
  <div>
    <v-layout class="!text-[#5B6582]">
      <v-dialog v-model="dialog" width="500px" fullscreen persistent>
        <v-card>
          <div>
            <div class="flex border-b-[1px] px-6 py-6">
              <h1 class="text-xl font-semibold grow">Notifications</h1>
              <h1>
                <v-btn @click="onNotification" flat class="!text-xl" size="xsmall"
                  ><v-icon>mdi-close</v-icon></v-btn
                >
              </h1>
            </div>
            <NotificationYesNotiftn v-if="notifications.notification.length != 0"/>
            <NotificationNoNotiftn :msg="msg" v-if="notifications.notification.length ==0"/>
          </div>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>
<script>

export default {
  props: ["onNotification"],
  setup() {
    const notifications=useMyNotificationsStore();
    return{notifications}
  },
  data() {
    return {
      dialog: true,
      msg:"You have not received any notification yet"
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped></style>
