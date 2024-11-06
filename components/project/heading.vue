<template>
    <div>
        <h1 class="titleCard capitalize">
            {{ projects.getProjectById($route.params.id).name }}
        </h1>
      </div>
</template>

<script>
export default {
  setup() {
    const projects = useMyProjectsStore()
    return { projects };
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