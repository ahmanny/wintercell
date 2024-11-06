<script setup>
definePageMeta({
  layout: "departmt-layout",
});
</script>

<template>
  <NuxtLayout>
    <div>
      <DepartmentHeading/>
      <div>
        <ClientOnly>
          <v-tabs v-model="tab">
            <v-tab value="one" color="blue">Processes</v-tab>
            <v-tab value="two" color="blue">Members and teams</v-tab>
            <v-tab value="three" color="blue">Files</v-tab>
          </v-tabs>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="one"
              ><DepartmentProcesses
            /></v-tabs-window-item>
            <v-tabs-window-item value="two">
              <DepartmentMembersTeams/>
            </v-tabs-window-item>
            <v-tabs-window-item value="three"
              ><DepartmentFiles
            /></v-tabs-window-item>
          </v-tabs-window>
        </ClientOnly>
      </div>
    </div>
  </NuxtLayout>
</template>
<script>
export default {
  setup() {
    const department = useMyDepartmentsStore();
    return { department };
  },
  data() {
    return {
      tab: null,
      name:"solomon",
      empty:[],
    };
  },
  methods:{
    departmentNAme(id){
      console.log(id);
    }
  }
};
</script>
<style scoped></style>
