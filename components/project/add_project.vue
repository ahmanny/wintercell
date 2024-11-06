<template>
  <div>
    <v-layout class="!text-[#5B6582]">
      <v-dialog v-model="dialog" persistent max-width="470px">
        <v-card class="!p-10 !rounded-xl colorstxt">
          <div class="flex items-center mb-7">
            <h1 class="grow text-xl font-semibold">New project</h1>
            <v-btn
              flat
              class="pa-2 !text-xl"
              @click="toggle"
              prependIcon="mdi-close"
              size="xsmall"
            ></v-btn>
          </div>
          <div>
            <v-form v-model="form" @submit.prevent="next_PG">
              <label for="id" class="font-semibold">Project name</label>
              <v-text-field
                id="id"
                class="mt-3"
                variant="outlined"
                placeholder="Uber Redesign"
                color="blue"
                v-model="projectS.name"
                :rules="nameRules"
              ></v-text-field>
              <label for="opt" class="font-semibold"
                >Project description (optional)</label
              >
              <v-textarea
                class="mt-3"
                placeholder="Enter description"
                id="opt"
                v-model="projectS.project_des"
                row-height="20"
                rows="2"
                variant="outlined"
                color="blue"
                auto-grow
              ></v-textarea>
              <v-btn
                color="blue"
                type="submit"
                class="!rounded-md"
                flat
                width="100%"
                height="50px"
                >Next</v-btn
              >
            </v-form>
          </div>
        </v-card>
      </v-dialog>
    </v-layout>
    <v-dialog v-model="next" persistent max-width="470px">
      <v-card class="!p-10 !rounded-xl colorstxt">
        <div class="flex items-center mb-7">
          <h1 class="grow text-xl font-semibold">New project</h1>
          <v-btn
            flat
            class="pa-2 !text-xl"
            @click="toggle"
            prependIcon="mdi-close"
            size="xsmall"
          ></v-btn>
        </div>
        <label>Select departments to assign (optional)</label>
        <search
          :items="department.departments"
          :addToList="addTo_depts"
          :placeholder="placeholder"
        />
        <label>Recommend processes (optional)</label>
        <search
          :items="process"
          :addToList="addTo_process"
          :placeholder="placehlder"
        />
        <div class="grid grid-cols-2 gap-6">
          <v-btn
            color="grey"
            flat
            variant="outlined"
            height="50px"
            @click="back"
            >Back</v-btn
          >
          <v-btn
            color="blue"
            flat
            height="50px"
            :loading="loading"
            @click="create"
            >Create project</v-btn
          >
        </div>
      </v-card></v-dialog
    >
  </div>
</template>

<script>
export default {
  props: ["toggle"],
  setup() {
    const department = useMyDepartmentsStore();
    const ProJects = useMyProjectsStore();
    return { department, ProJects };
  },

  data() {
    return {
      loading: false,
      dialog: true,
      placeholder: "Search for a department",
      placehlder: "Search for a process",
      next: false,
      form: false,
      projectS: {
        id: "",
        name: "",
        project_des: "",
        icon: "mdi-square-outline",
        route: "/Project",
        processes: [],
        departments: [],
      },
      process: [
        { id: 1, name: "New client project", icon: "mdi-triangle-outline" },
        { id: 2, name: "Digital transformation", icon: "mdi-triangle-outline" },
        { id: 3, name: "New hire onboarding", icon: "mdi-triangle-outline" },
      ],
      nameRules: [
        (value) => {
          if (value) return true;
          return "";
        },
      ],
    };
  },
  methods: {
    next_PG() {
      if (this.form == true) {
        this.dialog = false;
        this.next = true;
      }
    },
    back() {
      this.dialog = true;
      this.next = false;
    },
    addTo_depts(array, id) {
      this.projectS.departments.push(array);
      this.department.departments = this.department.departments.filter((item) => item.id !== id);
    },
    addTo_process(array, id) {
      this.projectS.processes.push(array);
      this.process = this.process.filter((item) => item.id !== id);
    },
    create() {
      this.loading = true;
      setTimeout(() => {
        this.projectS.id = (this.ProJects.projects.length + 1).toString();
        this.loading = false;
        this.ProJects.addProject(this.projectS);
        this.$router.push(`${this.projectS.route}/${this.projectS.id}`)
      }, 1000);
    },
  },
};
</script>
