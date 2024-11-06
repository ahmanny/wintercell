<script setup>
    const props = defineProps({
      email: String,
      greeting: String,
      signinBtn: String
    })
</script>
<template>
    <v-card flat class="mx-8">
      <div>
        <h1 class="titleCard">Wintercell</h1>
        <h1 class="headingCard">{{ greeting }}</h1>
        <p class="pTag">
          Enter the code sent to
          <span class=" font-bold">{{ email }}</span>
        </p>
        <p class="text-subtitle-2 pb-0">Code</p>
      </div>
        <v-otp-input
          v-model="otpCode"
          class=""
          type="number"
          base-color="blue"
        ></v-otp-input>
        <v-btn
          class="text-subtitle-2"
          width="440"            
          height="40"
          flat
          :loading="loading"
          :disabled="otpCode.length!=6"
          color="blue"
          @click="verifyCode"
          >{{ signinBtn }}</v-btn
        >
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        otpCode: '',
        invalid: 'grey',
        loading: false,
      }
    },
    methods: {
      verifyCode() {
        if (this.otpCode.length!==6) return;
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 1000)
        // get the otp sent to the email.
        // verify otp code typed is correct and send a welcome email.
      },
    },
  }
  </script>
  
  <style></style>
  