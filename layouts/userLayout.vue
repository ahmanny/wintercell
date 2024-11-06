<template>
  <ClientOnly>
    <v-app>
      <div class="flex h-[100%]">
        <main-sidebar />
        <div class="grow">
          <div class="flex">
            <div class="w-56">
              <v-list density="compact" nav>
                <v-list-item prepend-avatar="\avater1.svg"
                  >Boma Josiah</v-list-item
                >
                <side-bar :ListItem="ListItem" />
              </v-list>
            </div>
            <div class="w-full pt-5 pl-10 bg-slate-50 h-[1024px]"><slot /></div>
          </div>
        </div>
      </div>
    </v-app>
  </ClientOnly>
</template>
<script>
import SideBar from "~/components/SideBar.vue";
export default {
  components: { SideBar },
  data() {
    return {
      ListItem: [
        {
          title: "Tasks",
          value: "Task",
          icon: "mdi-check-circle-outline",
          route: "user-tasks",
        },
        {
          title: "Schedule",
          value: "Schedule",
          icon: "mdi-calendar-range-outline",
          route: "user-schedule",
        },
        {
          title: "Request",
          value: "Request",
          icon: "mdi-message-text-outline",
          route: "user-requests",
        },
        {
          title: "Check-ins",
          value: "Check-ins",
          icon: "mdi-clipboard-outline",
          route: "user-check-ins",
        },
        {
          title: "Profile",
          value: "Profile",
          icon: "mdi-account-outline",
          route: "user-profile",
        },
      ],
    };
  },
};
</script>
<style></style>
