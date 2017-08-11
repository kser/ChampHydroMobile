import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertController, NavController, ToastController } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';


/**
 * Generated class for the SupportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {

  submitted: boolean = false;
  supportMessage: string;
  subjectSelect: any;
  sendTo:string[] = ["bugs@ksertronics.com", "jfort@champhydro.com"];

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private socialSharing: SocialSharing,
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }

  submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.submitted = false;

      this.socialSharing.canShareViaEmail() //TODO: emailing from non-cordova device
      .then(() =>
      {
        this.socialSharing.shareViaEmail(this.supportMessage, "CHAMPIONS: " + this.subjectSelect, this.sendTo, null, null, null) //TODO: sendTo email
        .then((data) =>
        {
            console.log('Shared via Email');
            let toast = this.toastCtrl.create({
              message: 'Your support request has been sent. ',
              duration: 3000
            });
            toast.present();
            this.supportMessage = '';
          })
        .catch((err) =>
        {
            console.log('Not able to be shared via Email');
            let toast = this.toastCtrl.create({
              message: 'Not able to be sent via Email. ',
              duration: 3000
            });
            toast.present();
        });
      })
      .catch((err) =>
      {
        console.log('Sharing via Email NOT enabled');
      });

    }
  }

  // If the user enters text in the support question and then navigates
  // without submitting first, ask if they meant to leave the page
  ionViewCanLeave(): boolean | Promise<boolean> {
    // If the support message is empty we should just navigate
    if (!this.supportMessage || this.supportMessage.trim().length === 0) {
      return true;
    }

    return new Promise((resolve: any, reject: any) => {
      let alert = this.alertCtrl.create({
        title: 'Leave this page?',
        message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
      });
      alert.addButton({ text: 'Stay', handler: reject });
      alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });

      alert.present();
    });
  }
}
