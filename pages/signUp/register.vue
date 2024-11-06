<script setup>
definePageMeta({
  layout: "sign-up-layout",
});
</script>
<template>
  <NuxtLayout>
    <v-container justify-center max-width="440">
      <otp-code v-if="otpForm" :signinBtn="signinBtn" :greeting="greeting" :email="email"/>
      <v-card flat class="mx-8" v-if="vForm">
        <div>
          <h1 class="titleCard">Wintercell</h1>
          <h1 class="headingCard">{{ greeting }}</h1>
          <p class="pTag">
            Enter your name and work email address to proceed.
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
            color="blue"
            width="100%"
            class="text-subtitle-2"
            >Continue</v-btn
          >
        </v-form>
      </v-card>
      <div class="mt-7 ml-8">
        <p class="text-body-2 pb-6">
          Already have an account?
          <span class="font-weight-bold text-blue-darken-2"
            ><nuxt-link to="/signUp/login">Log in</nuxt-link></span
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
      signinBtn: "Create account",
      form: false,
      loading: false,
      otpForm: false,
      vForm: true,
      greeting: "Create your account",
      emailRules: [
        (value) => {
          if (value && /.+@.+\..+/.test(value)) return true;
          return "";
        },
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
    registerAcct() {
      if (!this.form) return;
      // save the details entered and also send a verification code to the email and the take the person to the verification code page
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
