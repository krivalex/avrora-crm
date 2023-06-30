import { IOrg } from './types/types'

const org: IOrg = {
  org: [
    {
      id: 1,
      title: 'Астана',
      abscractCount: 0,
      factCount: 0,
      parent_id: null,
      children: [
        {
          id: 11,
          title: 'Центр 1',
          abscractCount: 0,
          factCount: 0,
          parent_id: 1,
          children: [
            {
              id: 111,
              title: 'Отдел 1',
              abscractCount: 0,
              factCount: 0,
              parent_id: 11,
              children: [],
            },
            {
              id: 112,
              title: 'Отдел 2',
              abscractCount: 0,
              factCount: 0,
              parent_id: 11,
              children: [],
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
