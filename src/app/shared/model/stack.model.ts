

export interface IStack {
  title?: string
}

export class Stack implements IStack {
  constructor(
    public title?: string
  ) { }
}
