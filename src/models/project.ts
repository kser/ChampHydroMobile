// import { ProjPage } from './projPage';

  
export class ProjPage {
    
    type = '';
    photo1 = '';
    comment1   = '';
    photo2  = '';
    comment2    = '';
    photo3 = '';
    photo4 = '';
}

export class Project {
      
    constructor(
        public name: string = "", 
        public map: string = "",
        public showMap: boolean = false, 
        public pages: ProjPage[] = [],
        public lastUpdate: Date = new Date()) {}


    toggleProjectMap(showMap) {
        this.showMap = showMap;
    }


    // setBullet1(newBullet1) {
    //     this.bullet1 = newBullet1;
    // }

    // setBullet2(newBullet2) {
    //     this.bullet2 = newBullet2;
    // }

    // setBullet3(newBullet3) {
    //     this.bullet3 = newBullet3;
    // }

    updateDate() {
        this.lastUpdate = new Date();
    }

}
