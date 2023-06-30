export interface IOrg {
  org: object
}

export interface IItemStore {
  item: IItem
}

export interface IItem {
  id: number
  title: string
  abscractCount: number
  factCount: number
  parent_id: number
  children: IItem[]
}
