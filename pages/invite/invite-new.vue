<script setup>
definePageMeta({
  layout: "sign-up-layout",
});
</script>
<template>
  <NuxtLayout>
      <v-container justify-center max-width="440" class="pa-0">
        <v-card flat class="mr-8">
          <div>
            <h1 class="titleCard">Wintercell</h1>
            <h1 class="headingCard">Set up your company</h1>
            <p class="pTag">
              Enter company name. You can invite team members with their email
              address now or later from your dashboard
            </p>
          </div>
          <v-form v-model="form" @submit.prevent="inviteEmail">
            <!-- company name entry -->
            <label for="compName" class="">What’s your company name?</label>
            <v-text-field
              v-model="compName"
              id="compName"
              variant="outlined"
              :rules="nameRules"
              color="blue"
              placeholder="ACME, Inc."
              base-color="grey"
              density="compact"
            ></v-text-field>
            <!-- invite members entry-->
            <label for="invites">Invite members</label>
            <v-text-field
              v-for="(invitee, i) in members"
              :key="i"
              v-model="invitee.name"
              :rules="emailRules"
              density="compact"
              placeholder="name@company.com"
              base-color="grey"
              variant="outlined"
              color="blue"
            ></v-text-field>
            <!-- submit button -->
            <v-btn
              type="submit"
              flat
              :loading="loading"
              color="blue"
              width="440"
              class="text-caption text-weight-bold mt-3 py-3"
              >Set up company</v-btn
            >
          </v-form>
        </v-card>
      </v-container>
  </NuxtLayout>
</template>
<script>
export default {
    data() {
    return {
      email: "",
      compName: "",
      members: [{ name: "" }, { name: "" }],
      form: false,
      loading: false,
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
    inviteEmail() {
      if (!this.form) return;
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        // save the details entered and also send an invite link to email addresses entered
      }, 1000);
    },
  },
};
</script>