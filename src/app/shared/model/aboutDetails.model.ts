

export interface IAboutDetails {
  date?: string;
  description?: string;
  subDescription?: string;
}

export class AboutDetails implements IAboutDetails {
  constructor(
    public date?: string,
    public description?: string,
    public subDescription?: string
  ) { }
}
