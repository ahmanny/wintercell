import { defineStore } from 'pinia'
import type { Department, Team } from '~/types'

export const useMyDepartmentsStore = defineStore({
  id: 'myDepartmentsStore',
  state: () => ({
    departments: [] as Department[],
  }),
  getters: {
    getDepartmentById: (state) => (id: string) => {
      return state.departments.find(dept => dept.id === id)
    },
  },
  actions: {
    addDepartment(dept: Department) {
      this.departments.push(dept)
    },
    AddTeam(index:number,team:Team){
      this.departments[index].teams.push(team)
    },
    deleteTeam(index:number,name:string){
      this.departments[index].teams = this.departments[index].teams.filter((tms)=> tms.teamsName !== name)
    },
  },
  persist: {
    storage: piniaPluginPersistedstate.sessionStorage(),
  },
})
