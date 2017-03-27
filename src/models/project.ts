export class Project {
      
    constructor(public name: string = "", public map: string = "", public bullet1: string = "", public photo1: string = "") { }

    setBullet1(newBullet1) {
        this.bullet1 = newBullet1;
    }

}
