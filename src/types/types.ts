export interface IOrg {
  org: Array<IItem>
}

export interface IItemStore {
  item: IItem
}

export interface IItem {
  id: number
  title: string
  abscractCount: number
  factCount: number
  parent_id: number | null
  children: IItem[]
}
