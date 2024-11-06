import { defineStore } from 'pinia'
import type { project } from '~/types'

export const useMyProjectsStore = defineStore({
  id: 'myProjectsStore',
  state: () => ({
    projects: [] as project[],
  }),
  getters: {
    getProjectById: (state) => (id: string) => {
      return state.projects.find(project => project.id == id)
    },
  },
  actions: {
    addProject(dept: project) {
      this.projects.push(dept)
    },
  }
})
