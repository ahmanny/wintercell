<template>
  <v-layout row justify-center class="!text-[#5B6582]">
    <v-dialog
      v-model="dialog"
      max-width="500px"
      persistent
      flat
      variant="flat"
      v-for="(list, i) in 1"
      :key="i"
    >
      <v-card class="!p-10 !rounded-xl">
        <div class="flex">
          <h1 class="text-xl font-semibold mb-7 grow">New Department</h1>
          <h1>
            <button @click="toggle" class="text-gray-500">
              <v-icon>mdi-close</v-icon>
            </button>
          </h1>
        </div>
        <div>
          <v-form v-model="form" @submit.prevent="create">
            <label for="name" class="font-semibold"
              ><h1>Department name</h1></label
            >
            <v-text-field
              class="mt-3"
              :rules="nameRules"
              id="name"
              variant="outlined"
              v-model="dept.name"
              placeholder="Product"
              color="blue"
            ></v-text-field>
            <label for="members" class="font-bold">Add members</label>
            <v-list>
              <v-list-item
                v-for="(memb, i) in dept.teams[0].members"
                :key="i"
                :prepend-avatar="memb.avatar"
                class="!px-0"
              >
                <div class="flex items-center">
                  <h1 class="!font-bold text-sm w-[190px] py-2">
                    {{ memb.name
                    }}<span class="!font-normal pl-2">{{
                      memb.job.slice(0, 10) + "..."
                    }}</span>
                  </h1>
                  <v-select
                    :items="select"
                    variant="outlined"
                    :rules="nameRules"
                    density="compact"
                    class="!w-[20px] -mb-5"
                    v-model="memb.option"
                    color="blue"
                  ></v-select>
                  <v-btn
                    flat
                    size="xsmall"
                    class="!text-lg !py-2 !px-[6px]"
                    @click="removeItem(memb, memb.id)"
                    ><v-icon>mdi-delete-outline</v-icon></v-btn
                  >
                </div>
              </v-list-item>
            </v-list>
            <search :items="items" :addToList="addToList" :placeholder="placeholder"/>
            <v-btn
              color="blue"
              type="submit"
              flat
              width="100%"
              height="50px"
              :loading="loading"
              >Create department</v-btn
            >
          </v-form>
        </div>
      </v-card>
    </v-dialog></v-layout
  >
</template>
<script>
export default {
  props: ["toggle"],
  setup() {
    const department = useMyDepartmentsStore();
    const teamList = useMyUserSearchStoreStore();
    return { department,teamList };
  },
  data() {
    return {
      dialog: true,
      form: false,
      placeholder:"Search for a member",
      loading: false,
      dept: {
        name: "",
        id: "",
        icon:"mdi-circle-outline",
        route: "/department",
        teams: [
          {
            teamsName: "Department Name",
            members: [],
          },
        ],
      },
      select: ["Admin", "Member"],
      nameRules: [],
      items: [],
    };
  },
  mounted(){
    this.items=this.teamList.items
    this.nameRules = this.teamList.nameRules
  },
  methods: {
    addToList(array, id) {
      this.dept.teams[0].members.push(array);
      this.items = this.items.filter((item) => item.id !== id);
    },
    removeItem(array, id) {
      this.items.push(array);
      this.dept.teams[0].members = this.dept.teams[0].members.filter(
        (item) => item.id !== id
      );
    },
    create() {
      if (this.dept.teams[0].members != 0 && this.form == true) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.dept.id = (this.department.departments.length + 1).toString();
          this.department.addDepartment(this.dept);
          this.$router.push(`${this.dept.route}/${this.dept.id}`)
        }, 1000);
      }
    },
  },
};
</script>
