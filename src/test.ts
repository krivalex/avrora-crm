import { IOrg } from './types/types'

const org: IOrg = {
  org: [
    {
      id: 1,
      title: 'Астана',
      abscractCount: 0,
      factCount: 0,
      parent_id: null,
      abstractFullCount: this.abstractFullCount(this),
      factFullCount: this.factFullCount(this),
      children: [
        {
          id: 11,
          title: 'Центр 1',
          abscractCount: 0,
          factCount: 0,
          parent_id: 1,
          abstractFullCount: this.abstractFullCount.bind(this),
          factFullCount: this.factFullCount.bind(this),
          children: [
            {
              id: 111,
              title: 'Отдел 1',
              abscractCount: 10,
              factCount: 10,
              parent_id: 11,
              children: [],
              abstractFullCount: this.abstractFullCount.bind(this),
              factFullCount: this.factFullCount.bind(this),
            },
            {
              id: 112,
              title: 'Отдел 2',
              abscractCount: 15,
              factCount: 10,
              parent_id: 11,
              children: [],
              abstractFullCount: this.abstractFullCount.bind(this),
              factFullCount: this.factFullCount.bind(this),
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
