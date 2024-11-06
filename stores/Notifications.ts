import { defineStore } from 'pinia'

export const useMyNotificationsStore = defineStore({
  id: 'myNotificationsStore',
  state: () => ({
    notification:[
      {
        id:1,
        name:"Oluwadamilare Aboyeji ",
        content:"added you to a new project",
        team:"Microsoft Teams",
        teamIcon:"mdi-square-outline",
        dateDone:"Today",
        avatar:"/avaters/aboyejiAvater.svg",
        read:true,
      },
      {
        id:2,
        name:"Boma Josiah ",
        content:"added you to a new team",
        team:"Marketing operations",
        teamIcon:"mdi-circle-outline",
        dateDone:"Yesterday",
        avatar: "/avaters/bomaAvater.svg",
        read:true,
      },
    ],
   }),
  actions: {
    markALLread(){
      this.notification.forEach(n=>{
        n.read=false
      });
    },
    mark_Read(index:number){
      this.notification[index].read = false
    }
  },
  persist: {
    storage: piniaPluginPersistedstate.sessionStorage(),
  },
})
