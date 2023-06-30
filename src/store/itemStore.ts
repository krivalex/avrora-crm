import { defineStore } from 'pinia'

import { IItem } from '@/types/types'
import { IItemStore } from '@/types/types'

export const useItemStore = defineStore('itemStore', {
  state: (): IItemStore => ({
    item: {
      id: 0,
      title: '',
      abscractCount: 0,
      factCount: 0,
      parent_id: 0,
      children: [],
    },
  }),
  getters: {
    getItem(): IItem {
      return this.item
    },
  },
  actions: {
    setItem(item: IItem): void {
      this.item = item
    },
  },
})
