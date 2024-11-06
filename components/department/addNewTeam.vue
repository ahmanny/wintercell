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
          <h1 class="text-xl font-semibold mb-7 grow">New team</h1>
          <h1>
            <button @click="toggle" class="text-gray-500">
              <v-icon>mdi-close</v-icon>
            </button>
          </h1>
        </div>
        <div>
          <v-form v-model="form" @submit.prevent="create">
            <label for="name" class="font-semibold"><h1>Team name</h1></label>
            <v-text-field
              class="mt-3"
              :rules="nameRules"
              id="name"
              variant="outlined"
              v-model="team.teamsName"
              placeholder="Zeedas Product Team"
              color="blue"
            ></v-text-field>
            <label for="members" class="font-bold">Add members</label>
            <v-list>
              <v-list-item
                v-for="(memb, i) in team.members"
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
            <!-- <department-search-users
              :items="items"
              :addToList="addToList"
            /> -->
            <search :items="items" :addToList="addToList" :placeholder="placeholder" />
            <v-btn
              color="blue"
              type="submit"
              flat
              width="100%"
              height="50px"
              :loading="loading"
              >Create team</v-btn
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
    const teamList = useMyUserSearchStoreStore();

    const department = useMyDepartmentsStore();
    return { department, teamList };
  },
  data() {
    return {
      dialog: true,
      form: false,
      loading: false,
      placeholder:"Search for a member",
      index: 1,
      team: {
        teamsName: "",
        members: [],
      },
      select: ["Admin", "Member"],
      nameRules: [
        (value) => {
          if (value) return true;
          return "";
        },
      ],
      items: [],
    };
  },
  mounted() {
    this.items = this.teamList.items;
  },
  methods: {
    addToList(array, id) {
      this.team.members.push(array);
      this.items = this.items.filter((item) => item.id !== id);
    },
    removeItem(array, id) {
      this.items.push(array);
      this.team.members = this.team.members.filter((item) => item.id !== id);
    },
    create() {
      if (this.team.members != 0 && this.form == true && this.team.teamsName) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.index =
            Number(
              this.department.getDepartmentById(this.$route.params.id).id
            ) - this.index;
          this.department.AddTeam(this.index, this.team);
          this.$props.toggle();
        }, 1000);
      }
    },
  },
};
</script>
