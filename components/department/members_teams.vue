<template>
  <div class="mt-9">
    <div v-for="(team, i) in LImembers" :key="i" class="mb-24">
      <h1 class="titleCard pb-0 capitalize">
        {{ team.teamsName }}
        <span>
          <v-menu v-if="i != 0">
            <template v-slot:activator="{ props }">
              <v-btn
                flat
                size="xsmall"
                class="!text-lg !px-[6px] py-2"
                v-bind="props"
                ><v-icon>mdi-dots-horizontal</v-icon></v-btn
              ></template
            >
            <v-list class="!py-0" height="48">
              <v-list-item
                prepend-icon="mdi-delete-outline"
                value="delete"
                @click="deleteTeam(team.teamsName)"
                class="rounded !py-0 custom-list-item"
                size="small"
                >Delete team</v-list-item
              >
            </v-list>
          </v-menu>
        </span>
      </h1>
      <div class="flex flex-wrap">
        <div class="w-[510px] mr-[15px] mt-6 bg-slate-50">
          <v-btn
            flat
            class="!w-full flex justify-start !h-16"
            prependIcon="mdi-plus"
            >Add new member</v-btn
          >
        </div>
        <div
          class="w-[510px] mr-[15px] bg-white mt-6"
          v-for="memb in team.members"
          :key="memb.id"
        >
          <v-list-item
            :prepend-avatar="memb.avatar"
            :value="memb.id"
            class="!px-0"
          >
            <div class="flex items-center">
              <div class="grow">
                <h1>{{ memb.name }}</h1>
                <p>{{ memb.job }}</p>
              </div>
              <div class="flex items-center">
                <v-select
                  :items="select"
                  variant="outlined"
                  density="compact"
                  class="!w-[130px] -mb-5"
                  v-model="memb.option"
                  color="blue"
                ></v-select>
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-btn
                      flat
                      size="xsmall"
                      class="!text-lg !px-[6px] py-2"
                      v-bind="props"
                      ><v-icon>mdi-dots-horizontal</v-icon></v-btn
                    ></template
                  >
                  <v-list class="!py-0" height="48">
                    <v-list-item
                      prepend-icon="mdi-delete-outline"
                      value="delete"
                      @click="deleteMember(memb.id, i)"
                      class="rounded !py-0 custom-list-item"
                      size="small"
                      >Delete Member</v-list-item
                    >
                  </v-list>
                </v-menu>
              </div>
            </div>
          </v-list-item>
        </div>
      </div>
    </div>
    <div class="w-[170px] mt-12">
      <v-btn
        flat
        class="!w-full flex justify-start !bg-inherit"
        @click="createNewTeam"
        prependIcon="mdi-plus"
        >Create new team</v-btn
      >
    </div>
    <DepartmentAddNewTeam :toggle="createNewTeam" v-if="create" />
  </div>
</template>

<script>
export default {
  setup() {
    const department = useMyDepartmentsStore();
    return { department };
  },
  data() {
    return {
      select: ["Head", "Member"],
      create: false,
      index: 1,
      LImembers: [],
    };
  },
  mounted() {
    this.LImembers = this.department.getDepartmentById(
      this.$route.params.id
    ).teams;
  },
  methods: {
    createNewTeam() {
      this.create = !this.create;
    },
    deleteMember(id, i) {
      this.LImembers[i].members = this.LImembers[i].members.filter(
        (item) => item.id !== id
      );
    },
    deleteTeam(team) {
      this.index= Number(this.department.getDepartmentById(this.$route.params.id).id) - this.index
      this.department.deleteTeam(this.index, team);
    },
  },
};
</script>

<style></style>
