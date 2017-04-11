import { Project } from './project';

export class District {

  constructor(public name: string = "", public map = "", public projects: Project[] = []) {}


  addProject(project){
        this.projects.push(new Project(
          project.name,
          project.map,
        ));
    }
    
    removeProject(project){
      
      let index = this.projects.indexOf(project);
      if(index > -1 ) {
        this.projects.splice(index,1);
      }
    }
    
    updateProject(project) {
      let index = -1;

      for(let i=0; i<this.projects.length; i++){
        if(this.projects[i].name === project.name) {
          index = i;
          break;
        }
      }

      console.log(index);


      if(index > -1) {
        this.projects[index].setBullet1(project.bullet1);
        this.projects[index].setBullet2(project.bullet2);
        this.projects[index].setBullet3(project.bullet3);
        this.projects[index].photos = project.photos;
        this.projects[index].updateDate();
      }
      else {
        console.log("No Project Found");
      }
}
}
