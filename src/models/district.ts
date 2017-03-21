/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 *
 * The Districts service manages creating instances of District, so go ahead and rename
 * that something that fits your app as well.
 */
export class District {
    id: number;
    name: string;
    mapImage: string;
    numProjects: number;
    projects: string[];

//   constructor(private fields: any) {
//     // Quick and dirty extend/assign fields to this model
//     for(let f in fields) {
//       this[f] = fields[f];
//     }
//   }

}
