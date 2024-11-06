<template>
  <div>
    <notification v-if="notification" :onNotification="onNotification" />
    <div class="!w-[75px] h-[100%] mainbar">
      <v-list bg-color="#0B1318" density="compact" nav>
        <div>
          <v-list-item
            v-for="(item, i) in sidebarList"
            :key="i"
            :prepend-icon="item.icon"
            :value="item.value"
            :to="{ name: item.route }"
            class="my-5 rounded"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-bell-outline"
            class="my-5 rounded"
            @click="onNotification()"
          >
          </v-list-item>
        </div>
      </v-list>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notification: false,
      sidebarList: [
        { value: "user", icon: "mdi-account-outline", route: "user-tasks" },
        {
          value: "company",
          icon: "mdi-view-dashboard-outline",
          route: "company-processes",
        },
        {
          value: "department",
          icon: "mdi-account-multiple-outline",
          route: "department",
        },
        {
          value: "project",
          icon: "mdi-folder-outline",
          route: "Project",
        },
      ],
    };
  },
  methods: {
    onNotification() {
      this.notification = !this.notification;
    },
  },
};
</script>
<style>
.mainbar {
  background: #0b1318 !important;
}
</style>
