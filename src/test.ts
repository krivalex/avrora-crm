import { IOrg, IItem } from './types/types'

const org: IOrg = {
  org: [new IItem(1, 'Астана', 0, 0, null, [new IItem(11, 'Центр 1', 0, 0, 1, [new IItem(111, 'Отдел 1', 10, 10, 11, []), new IItem(112, 'Отдел 2', 15, 10, 11, [])])])],
}

export default {
  org,
}
