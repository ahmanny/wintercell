<script setup>
definePageMeta({
  layout: "user-layout",
});
</script>

<template>
  <NuxtLayout>
    <div class="px-16">
      <div>
        <h1 class="titleCard">PROFILE</h1>
        <v-form v-model="form" @submit.prevent="updateAcct">
          <div class="flex flex-wrap mt-8">
            <div
              class="w-[430px] mr-auto"
              v-for="(field, i) in formFields"
              :key="i"
            >
              <label :for="field.label">{{ field.label }}</label>
              <v-text-field
                v-model="field.value"
                :id="field.label"
                variant="outlined"
                color="blue"
                class=" !my-3"
                :rules="nameRules"
              >
                <img :src="field.avater" alt="" />
              </v-text-field>
            </div>
            <div class="w-[430px] mr-auto">
              <label :for="emailfield.label">{{ emailfield.label }}</label>
              <v-text-field
                :id="emailfield.label"
                color="blue"
                variant="outlined"
                :rules="emailRules"
                class=" !mt-3"
                v-model="emailfield.value"
              ></v-text-field>
            </div>
          </div>
          <v-btn
            type="submit"
            flat
            :loading="loading"
            color="blue"
            width="22%"
            height="48px"
            class="text-subtitle-2"
            >Update profile</v-btn
          >
        </v-form>
        <div class=" mt-16 ">
          <v-btn flat class=" !text-red-600 !bg-inherit" @click="toggle">Delete your account</v-btn>
        </div>
      </div>
    </div>
    <ProfileDeleteAcct v-if="deleted" :toggle="toggle"/>
  </NuxtLayout>
</template>
<script>
export default {
  data() {
    return {
      form: false,
      deleted: false,
      loading: false,
      emailfield: {
        label: "Email address",
        value: "boma@natterbase.com",
      },
      formFields: [
        {
          label: "Photo",
          value: "Browse files to upload",
          avater: "/avater1.svg",
        },
        { label: "Full name", value: "Boma Josiah"},
        { label: "Username", value: "Boma", rule: "nameRules" },
      ],
      nameRules: [
        (value) => {
          if (value) return true;
          return "";
        },
      ],
      emailRules: [
        (value) => {
          if (value && /.+@.+\..+/.test(value)) return true;
          return "";
        },
      ],
    };
  },
  methods: {
    updateAcct() {
      if (!this.form) return;
      // save the details entered and update
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        console.log("updated");
      }, 1000);
    },
    toggle(){
      this.deleted=!this.deleted
    }
  },
};
</script>
<style scoped></style>
