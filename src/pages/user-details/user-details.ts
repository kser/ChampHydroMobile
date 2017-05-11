import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Storage } from '@ionic/storage';


/*
  Generated class for the UserDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {

  private userForm : FormGroup;
  private name;
  // private email;
  // private cellphone;

  constructor( private formBuilder: FormBuilder, public storage: Storage ) {
    this.getNameFromStorage();
    this.createForm();
  }

  getNameFromStorage() {
    this.storage.get('name').then(val => {
      console.log(val);
      this.name = val;
    })
  }

  createForm() {
    console.log("CF");
    console.log(this.name);
    this.userForm = this.formBuilder.group({
      name: [this.name, Validators.required],
      email: ['kyle@kyle.com', Validators.required],
      cellphone: ['7133344456', Validators.required]
    });
  }

  saveForm(){
    this.storage.set('name', this.userForm.value.name );
    // this.storage.set('email', this.userForm.value.email );
    // this.storage.set('cellphone', this.userForm.value.cellphone );
  }
  
  logForm(){
    this.storage.get('name').then((data)=>{
      console.log(data);
    });
  }

}
