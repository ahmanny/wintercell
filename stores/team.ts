import { defineStore } from 'pinia'

export const useMyTeamStore = defineStore({
  id: 'myTeamStore',
  state: () => ({ 
    notification:[
      // {
      //   id:1,
      //   content:"Oluwadamilare Aboyeji added you to a new project",
      //   team:"Microsoft Teams",
      //   teamIcon:"mdi-circle-outline",
      //   dateDone:"Today"
      // }
    ],
  }),
  actions: {}
})
