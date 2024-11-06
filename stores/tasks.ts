import { defineStore } from 'pinia'

export const useMyTasksStore = defineStore({
  id: 'myTasksStore',
  state: () => ({
    count: 0,
    name:"Solomon"
  }),
  actions: {
    increment() {
      this.count++;
      console.log('increment');
      
    },
    changeText(value:string,id:number){
      this.name = value;
      this.count +=id;
    }
  },
  persist: true,
});
