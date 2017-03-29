import { Component } from '@angular/core';

import { ViewController, NavParams, Platform} from "ionic-angular";

import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'view-pdf',
  templateUrl: 'view-pdf.html'
})

export class ViewPdf {

  pdfUrl: string;

  public sendTo   : any;
   public subject  : string = 'First Champions Report Email!';
   public message  : string = 'We finally did it! PDF attached';
   public image    : string  = 'http://masteringionic2.com/perch/resources/mastering-ionic-2-cover-1-w320.png';
   public uri      : string  = 'http://masteringionic2.com/products/product-detail/s/mastering-ionic-2-e-book';


  constructor(private viewCtrl: ViewController,
              private navParams: NavParams,
              public platform   : Platform,
              private socialSharing: SocialSharing) { }

  ionViewDidLoad() {
    this.pdfUrl = this.navParams.get('pdfUrl');
    // console.log(this.pdfUrl);
  }

  close(remove = false) {
    this.viewCtrl.dismiss(remove);
  }

  emailPdf()
   {
     console.log(this.pdfUrl);
      this.platform.ready()
      .then(() =>
      {
         this.socialSharing.canShareViaEmail()
         .then(() =>
         {
            this.socialSharing.shareViaEmail(this.message, this.subject, this.sendTo, null, null, this.pdfUrl)
            .then((data) =>
            {
               console.log('Shared via Email');
            })
            .catch((err) =>
            {
               console.log('Not able to be shared via Email');
            });
         })
         .catch((err) =>
         {
            console.log('Sharing via Email NOT enabled');
         });
      });
   }

}