import { defineStore } from 'pinia'

export const useMyUserSearchStoreStore = defineStore({
  id: 'myUserSearchStoreStore',
  state: () => ({
    items: [
      { id: 1, name: "Tolu Faith", job: "UI/UX Designer", avatar: "/avaters/toluAvater.svg", option: "", },
      { id: 2, name: "Boma Josiah", job: "UI/UX Designer", avatar: "/avaters/bomaAvater.svg", option: "", },
      { id: 3, name: "Sam Elliot", job: "Software Developer", avatar: "/avaters/eliotAvater.svg", option: "", },
      { id: 4, name: "Oluwadamilare Aboyeji", job: "Software Developer", avatar: "/avaters/aboyejiAvater.svg", option: "", },
      { id: 5, name: "Jonathan Smith", job: "Software Developer", avatar: "/avaters/smithAvater.svg", option: "", },
    ],
    nameRules: [
      (value: any) => {
        if (value) return true;
        return "";
      },
    ],
  }),
  actions: {}
})
