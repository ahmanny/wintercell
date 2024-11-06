<script setup>
definePageMeta({
  layout: "sign-up-layout",
});
</script>
<template>
  <NuxtLayout>
    <v-container justify-center max-width="440" class="pa-0">
      <otp-code
        v-if="otpForm"
        :signinBtn="signinBtn"
        :greeting="greeting"
        :email="email"
      />
      <v-card flat class="mx-8" v-if="vForm">
        <div>
          <h1 class="titleCard">Wintercell</h1>
          <h1 class="headingCard">{{ greeting }}</h1>
          <p class="pTag">Enter your email address to proceed.</p>
        </div>
        <v-form v-model="form" @submit.prevent="loginAcct">
          <label for="emailaddress">Email address</label>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            id="emailaddress"
            density="compact"
            placeholder="johnstones@gmail.com *"
            base-color="grey"
            variant="outlined"
            color="blue"
          ></v-text-field>
          <v-btn
            type="submit"
            flat
            :loading="loading"
            :disabled="!form"
            color="blue"
            width="440"
            class="text-subtitle-2"
            >Continue</v-btn
          >
        </v-form>
      </v-card>
      <div class="mt-7 ml-8">
        <p class="text-body-2 pb-6">
          Dont have an acccount?
          <span class="font-weight-bold text-blue-darken-2"
            ><nuxt-link to="/signUp/register">Create account</nuxt-link></span
          >
        </p>
      </div>
    </v-container>
  </NuxtLayout>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      Fullname: "",
      form: false,
      vForm: true,
      otpForm: false,
      loading: false,
      signinBtn: "Log into your account",
      greeting: "Welcome back",
      emailRules: [
        (value) => {
          if (value && /.+@.+\..+/.test(value)) return true;
          return "";
        },
      ],
    };
  },
  methods: {
    loginAcct() {
      if (!this.form) return;
      //check email entered if its registered, if so, send a verification code to the email and then take the person to the verification code page
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.otpForm = true;
        this.vForm = false;
      }, 1000);
    },
  },
};
</script>

<style></style>
