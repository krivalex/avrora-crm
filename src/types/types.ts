export interface IOrg {
  org: Array<IItem>
}

export interface IItemStore {
  item: IItem
}

export class IItem {
  public id: number
  public title: string
  public abscractCount: number
  public factCount: number
  public parent_id: number | null
  public children: IItem[]

  constructor(id: number, title: string, abscractCount: number, factCount: number, parent_id: number | null, children: IItem[]) {
    this.id = id
    this.title = title
    this.abscractCount = abscractCount
    this.factCount = factCount
    this.parent_id = parent_id
    this.children = children
  }

  public abstractFullCount(): number {
    let count = this.abscractCount
    this.children.forEach((item: IItem) => {
      count += item.abstractFullCount()
    })
    return count
  }

  public factFullCount(): number {
    let count = this.factCount
    this.children.forEach((item: IItem) => {
      count += item.factFullCount()
    })
    return count
  }
}
