/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 *
 * The Districts service manages creating instances of District, so go ahead and rename
 * that something that fits your app as well.
 */
export class District {
    // name: string;
    // mapImage: string;
    // projects: string[];

  constructor(private fields: any) {
    // Quick and dirty extend/assign fields to this model
    for(let f in fields) {
      this[f] = fields[f];
    }
  }

  // addProject(project){
  //       this.projects.push({
  //           name: project.name,
  //           bullet1: project.bullet1
  //       });
  //   }
 
  //   removeProject(project){
 
  //       for(let i = 0; i < this.projects.length; i++) {
  //           if(this.projects[i] == project){
  //               this.projects.splice(i, 1);
  //           }
  //       }
 
  //   }

}
