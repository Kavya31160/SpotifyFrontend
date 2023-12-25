import { Artist } from "./artist";
export class Recommendation {
   
    constructor(
        public artists: Artist[],
        public id: string,
        public href: string,
        public name: string,
        public isAdded: boolean) { }
}
