<script setup>
definePageMeta({
  layout: "sign-up-layout",
});
</script>
<template>
  <NuxtLayout>
    <v-container justify-center max-width="440" class=" pa-0">
      <v-card flat class="mx-0">
        <div>
          <h1 class="titleCard">Wintercell</h1>
          <h1 class="headingCard">Join Natterbase</h1>
          <p class="pTag">
            Your team is on Wittercell. Log in to join your team and start
            collaborating.
          </p>
        </div>
        <v-form v-model="form" @submit.prevent="registerAcct">
          <label for="fullname">Full name</label>
          <v-text-field
            v-model="Fullname"
            id="fullname"
            variant="outlined"
            :rules="nameRules"
            color="blue"
            placeholder="John Snow *"
            base-color="grey"
            density="compact"
          ></v-text-field>
          <label for="emailaddress">Email address</label>
          <v-text-field
            id="emailaddress"
            density="compact"
            disabled
            :model-value="email"
            base-color="grey"
            variant="outlined"
            color="blue"
          ></v-text-field>
          <v-btn
            type="submit"
            flat
            :loading="loading"
            color="blue"
            width="440"
            class="text-subtitle-2"
            >Continue</v-btn
          >
        </v-form>
      </v-card>
    </v-container>
  </NuxtLayout>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      Fullname: "",
      email:"boma@natterbase.com",
      form: false,
      loading: false,
      nameRules: [
        (value) => {
          if (value) return true;
          return "";
        },
      ],
    };
  },
  methods: {
    registerAcct() {
      if (!this.form) return;
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>
