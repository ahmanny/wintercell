<template>
  <v-app>
    <div class="flex">
      <main-sidebar />
      <div class="grow">
        <div class="flex">
          <div class="w-56 h-[1024px]">
            <v-list density="compact" nav>
              <v-list-item class="base">
                <div class=" flex items-center">
                  <h1 class="grow">Departments</h1>
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
            <ClientOnly >

            <DepartmentNewDpartment
              :toggle="toggle"
              v-if="newDp"
            />
            <RequestsNoRequest :msg="msg" v-if="department.departments.length==0" />

            <slot />
                          
          </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  setup() {
    const department = useMyDepartmentsStore();
    return { department };
    
  },
  data() {
    return {
      newDp: false,
      msg: "You have not created any department yet",
      ListItem: [],
    };
  },
  created() {
    this.ListItem =this.department.departments
  },
  methods: {
    toggle() {
      this.newDp = !this.newDp;
    },
    handleTitleUpdate(newTitle) {
      this.ListItem[this.ListItem.length].title = newTitle;
    },
    handleTeamUpdate(newTeam) {
      this.ListItem[this.ListItem.length].team = newTeam;
    },
    handleArrayUpdate(newArray) {
      this.ListItem[this.ListItem.length] = newArray;
      newArray.id = newArray.name;
      departments[departments.length] = newArray;
    },
  },
};
</script>
