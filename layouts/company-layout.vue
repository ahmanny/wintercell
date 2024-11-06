<template>
  <ClientOnly>
    <v-app>
      <div class="flex">
        <main-sidebar />
        <div class="grow">
          <div class="flex">
            <div class="w-56 h-[100%]">
              <v-list density="compact" nav>
                <v-list-item
                  prepend-icon="mdi-link-circle"
                  class="custom-list-item base"
                  >Natterbase</v-list-item
                >
                <side-bar :ListItem="ListItem" />
              </v-list>
            </div>
            <div class="grow bg-slate-50 min-h-[1024px] pl-9 pt-7">
              <slot />
            </div>
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
          title: "Processes",
          icon: "mdi-repeat",
          route: "company-processes",
        },
        {
          title: "Members",
          icon: "mdi-account-plus-outline",
          route: "company-members",
        },
        {
          title: "Integrations",
          icon: "mdi-swap-horizontal",
          route: "company-integrations",
        },
        {
          title: "Settings",
          icon: "mdi-cog-outline",
          route: "company-settings",
        },
      ],
    };
  },
};
</script>
<style></style>
