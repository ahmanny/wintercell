<script setup>
definePageMeta({
  layout: "sign-up-layout",
});
</script>
<template>
  <NuxtLayout>
    <v-container justify-center max-width="440">
      <v-card flat class="mx-8">
        <div>
          <h1 class="titleCard">Wintercell</h1>
          <h1 class="headingCard">Join Natterbase</h1>
          <p class="pTag">
            Your team is on Wittercell. Log in to join your team and start
            collaborating.
          </p>
        </div>
        <v-form v-model="form" @submit.prevent="loginAcct">
          <label for="emailaddress">Email address</label>
          <v-text-field
            v-model="email"
            id="emailaddress"
            density="compact"
            disabled
            variant="outlined"
          ></v-text-field>
          <v-btn
            type="submit"
            flat
            :loading="loading"
            :disabled="!form"
            color="blue"
            width="440"
            height="40"
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
      email: "boma@natterbase.com",
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
    loginAcct() {
      if (!this.form) return;
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style>
.img {
  padding-right: 100px;
}
.input {
  height: 20px;
  padding: 0px;
}
</style>
