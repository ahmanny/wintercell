<template>
  <ClientOnly>
    <v-app>
      <div class="flex">
        <main-sidebar />
        <div class="grow">
          <div class="flex">
            <div class="w-56 h-[1024px]">
              <v-list density="compact" nav>
                <v-list-item class="base">
                  <div class="flex items-center">
                    <h1 class="grow">Projects</h1>
                    <v-btn
                      flat
                      class="pa-2 !text-xl"
                      @click="toggle"
                      prependIcon="mdi-plus"
                      size="xsmall"
                    ></v-btn>
                  </div>
                </v-list-item>
                <side-bar-i-d :ListItem="ListItem" />
              </v-list>
            </div>
            <div class="w-full pt-5 pl-10 bg-slate-50">
              <ProjectAddProject :toggle="toggle" v-if="newprjt" />
              <RequestsNoRequest :msg="msg" v-if="projects.projects.length==0" />
              <slot />
            </div>
          </div>
        </div>
      </div>
    </v-app>
  </ClientOnly>
</template>
<script>
export default {
  setup() {
    const projects = useMyProjectsStore();
    return { projects };
  },
  data() {
    return {
      newprjt: false,
      msg: "You have not created any Projects yet",
      ListItem: [],
    };
  },
  mounted() {
    this.ListItem = this.projects.projects;
  },
  methods: {
    toggle() {
      this.newprjt = !this.newprjt;
    },
  },
};
</script>
