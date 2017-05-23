import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { DistrictService }  from '../../providers/district.service';


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
  public user = {name: "", email: ""};

  constructor( private formBuilder: FormBuilder, public dataService: DistrictService ) {
    this.user = this.dataService.getUser();

    this.createForm();
  }


  createForm() {
    // console.log("CF", this.user, this.user.name, this.user.email);
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  saveForm(){
    this.user = this.userForm.value;
    this.dataService.saveUser(this.userForm.value);
  }
  
  logForm(){
    console.log(this.user);
  }

}
