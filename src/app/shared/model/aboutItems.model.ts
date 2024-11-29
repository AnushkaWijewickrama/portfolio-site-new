import { IAboutDetails } from "./aboutDetails.model";


export interface IAboutItems {
    subTitle?: string;
    title?: string;
    details?: IAboutDetails[];
}

export class AboutItems implements IAboutItems {
    constructor(
        public subTitle?: string,
        public title?: string,
        public details?: IAboutDetails[],
    ) { }
}
