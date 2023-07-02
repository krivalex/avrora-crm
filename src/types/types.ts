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
  public abstractFullCountNumber: number
  public factFullCountNumber: number

  constructor(id: number, title: string, abscractCount: number, factCount: number, parent_id: number | null, children: IItem[], abstractFullCount: () => number, factFullCount: () => number) {
    this.id = id
    this.title = title
    this.abscractCount = abscractCount
    this.factCount = factCount
    this.parent_id = parent_id
    this.children = children
    this.abstractFullCountNumber = abstractFullCount()
    this.factFullCountNumber = factFullCount()
  }

  public abstractFullCount(): number {
    this.children.forEach((item: IItem) => {
      this.abstractFullCountNumber += item.abscractCount
    })
    return this.abstractFullCountNumber
  }

  public factFullCount(): number {
    this.children.forEach((item: IItem) => {
      this.factFullCountNumber += item.factCount
    })
    return this.factFullCountNumber
  }
}
