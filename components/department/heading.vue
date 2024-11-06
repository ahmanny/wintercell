<template>
    <div>
        <h1 class="titleCard capitalize">
            {{ department.getDepartmentById($route.params.id).name }}
        </h1>
      </div>
</template>

<script>
export default {
  setup() {
    const department = useMyDepartmentsStore();
    return { department };
  },
  data(){
    return{

    };
  },
  methods:{

  },
}

</script>

<style>

</style>