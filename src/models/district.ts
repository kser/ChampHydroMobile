import { Project } from './project';

export class District {

  constructor(public name: string = "", public map = "", public projects: Project[] = []) {}


  addProject(project){
        this.projects.push(new Project(
          project.name,
          project.map,
        ));
    }
 
  //   removeProject(project){
 
  //       let index = this.projects.indexOf(project);
  //       if(index > -1 ) {
  //         this.projects.splice(index,1);
  //       }
 
  //   }

}
