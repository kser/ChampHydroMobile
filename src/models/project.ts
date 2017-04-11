export class Project {
      
    constructor(
        public name: string = "", 
        public map: string = "", 
        public bullet1: string = "",    //Todo: change to array of strings
        public bullet2: string = "", 
        public bullet3: string = "", 
        public photos: string[] = [],
        public lastUpdate: Date = new Date()) {}

    setBullet1(newBullet1) {
        this.bullet1 = newBullet1;
    }

    setBullet2(newBullet2) {
        this.bullet2 = newBullet2;
    }

    setBullet3(newBullet3) {
        this.bullet3 = newBullet3;
    }

    updateDate() {
        this.lastUpdate = new Date();
    }

}
