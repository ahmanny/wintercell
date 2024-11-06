<template>
  <ClientOnly>
    <v-app>
      <v-row no-gutters align="center">
        <v-col cols="6">
          <img src="/assets/signupLogo.svg" />
        </v-col>
        <v-col cols="6">
          <slot />
        </v-col>
      </v-row>
    </v-app>
  </ClientOnly>
</template>
