

export interface IPortfolioItems {
  title?: string,
  image?: string,
  format?: string,
  formatColor?: string,
  link?: string
}

export class PortfolioItems implements IPortfolioItems {
  constructor(
    public title?: string,
    public image?: string,
    public format?: string,
    public formatColor?: string,
    public link?: string
  ) { }
}
