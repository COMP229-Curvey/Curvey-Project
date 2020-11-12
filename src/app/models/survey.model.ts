export class Survey
{
    constructor(
        public _id?: number,
        public title?: string,
        public description?:string,
        public questions?:string[],
        public answers?:number[]
    ){}
}