import { defineStore } from 'pinia'

export const useMyRulesStoreStore = defineStore({
  id: 'myRulesStoreStore',
  state: () => ({
    nameRules: [
      (value: any) => {
        if (value) return true;
        return "";
      },
    ],
    emailRules: [
      (value: string) => {
        if (value && /.+@.+\..+/.test(value)) return true;
        return "";
      },
    ],
   }),
  actions: {}
})
