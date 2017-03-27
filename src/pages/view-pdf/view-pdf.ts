import { Component } from '@angular/core';

import { ViewController, NavParams } from "ionic-angular";

import { SocialSharing } from 'ionic-native';

@Component({
  selector: 'view-pdf',
  templateUrl: 'view-pdf.html'
})

export class ViewPdf {

  pdfUrl: string;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams) { }

  ionViewDidLoad() {
    this.pdfUrl = this.navParams.get('pdfUrl');
  }

  close(remove = false) {
    this.viewCtrl.dismiss(remove);
  }

  emailPdf() {
    // Check if sharing via email is supported
    SocialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });

    // Share via email
    SocialSharing.shareViaEmail('Hello', 'Test share pdf', ['kyle.serres@hpe.com'], ['assets/img/DistrictMaps/mud-468-map.jpg']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
      console.log("Error sharing via email")
    });
  }

}