// create pinia store

import { defineStore } from 'pinia'
import { IOrg } from '@/types'

export const useTableStore = defineStore('tableStore', {
  state: (): IOrg => ({
    org: {},
  }),
  getters: {
    getOrg(): object {
      return this.org
    },
  },
  actions: {
    setOrg(org: object): void {
      this.org = org
    },
  },
})
