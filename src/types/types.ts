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
    this.parent_id = parent_id
    this.children = children

    this.abscractCount = abscractCount === 0 ? this.abstractFullCount() : abscractCount
    this.factCount = factCount === 0 ? this.factFullCount() : factCount
  }

  public abstractFullCount(): number {
    let count = 0
    this.children.forEach((item) => {
      count += item.abscractCount
      console.log(item)
    })
    return count
  }

  public factFullCount(): number {
    let count = 0
    this.children.forEach((item) => {
      count += item.factCount
      console.log(item)
    })
    return count
  }
}
