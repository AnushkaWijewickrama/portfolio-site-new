import { Stack } from "./stack.model";


export interface IPortfolioItems {
  title?: string,
  image?: string,
  format?: string,
  formatColor?: string,
  link?: string,
  stack?: Stack[]
  code?: string
}

export class PortfolioItems implements IPortfolioItems {
  constructor(
    public title?: string,
    public image?: string,
    public format?: string,
    public formatColor?: string,
    public link?: string,
    public stack?: Stack[],
    public code?: string
  ) { }
}
