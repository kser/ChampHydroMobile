export class Project {
    // name: string;
    // detail1: string;
    // detail2: string;
    // detail3: string;
    // photo1: string;
    // photo2: string;
    
    constructor(private fields: any) {
    // Quick and dirty extend/assign fields to this model
    for(let f in fields) {
      this[f] = fields[f];
    }
  }

}
