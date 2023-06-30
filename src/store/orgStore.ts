// create pinia store

import { defineStore } from 'pinia'
import { IOrg } from '@/types/types'

export const useOrgStore = defineStore('tableStore', {
  state: (): IOrg => ({
    org: [],
  }),
  getters: {
    getOrg(): object {
      return this.org
    },
  },
  actions: {
    setOrg(org: []): void {
      this.org = org
    },
  },
})
