import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ToastController } from 'ionic-angular';

import { DistrictMasterPage } from '../district-master/district-master';


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

  constructor(
    public navCtrl: NavController, 
    private formBuilder: FormBuilder, 
    public dataService: DistrictService ,
    public toastCtrl: ToastController
  ) {
    this.user = this.dataService.getUser();

    this.createForm();
    this.setFormValues();
  }


  createForm() {
    // console.log("CF", this.user, this.user.name, this.user.email);
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  setFormValues() {
    this.userForm.controls['name'].setValue(this.user.name);
    this.userForm.controls['email'].setValue(this.user.email);
  }

  saveForm(){
    this.user = this.userForm.value;
    this.dataService.saveUser(this.userForm.value);

    let toast = this.toastCtrl.create({
      message: 'Saved',
      duration: 3000
    });
    toast.present();

    this.navCtrl.setRoot(DistrictMasterPage);
  }
  
  logForm(){
    console.log(this.user);
  }

}
