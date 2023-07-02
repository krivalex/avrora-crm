import { IOrg } from './types/types'

const org: IOrg = {
  org: [
    {
      id: 1,
      title: 'Астана',
      abscractCount: 0,
      factCount: 0,
      parent_id: null,
      abstractFullCountNumber: 0,
      factFullCountNumber: 0,
      children: [
        {
          id: 11,
          title: 'Центр 1',
          abscractCount: 0,
          factCount: 0,
          parent_id: 1,
          abstractFullCountNumber: 0,
          factFullCountNumber: 0,
          children: [
            {
              id: 111,
              title: 'Отдел 1',
              abscractCount: 10,
              factCount: 10,
              parent_id: 11,
              children: [],
              abstractFullCountNumber: 0,
              factFullCountNumber: 0,
              abstractFullCount() {
                return this.children.reduce((acc: number, item: IItem) => {
                  return acc + item.abscractCount
                }, 0)
              },
              factFullCount() {
                return this.children.reduce((acc: number, item: IItem) => {
                  return acc + item.factCount
                }, 0)
              },
            },
            {
              id: 112,
              title: 'Отдел 2',
              abscractCount: 15,
              factCount: 10,
              parent_id: 11,
              children: [],
              abstractFullCountNumber: 0,
              factFullCountNumber: 0,
              abstractFullCount() {
                return this.children.reduce((acc: number, item: IItem) => {
                  return acc + item.abscractCount
                }, 0)
              },
              factFullCount() {
                return this.children.reduce((acc: number, item: IItem) => {
                  return acc + item.factCount
                }, 0)
              },
            },
          ],
        },
      ],
    },
  ],
}

export default {
  org,
}
