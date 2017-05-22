export class User {

  constructor(public name: string = "", public email = "", public cellphone: string = "") {
  }

  setName(name) {
      this.name = name;
  }

  setEmail(email) {
      this.email = email;
  }

  setCellphone(cellphone) {
      this.cellphone = cellphone;
  }


}
