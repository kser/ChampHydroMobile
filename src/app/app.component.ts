import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { DistrictMasterPage } from '../pages/district-master/district-master';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { SupportPage } from '../pages/support/support';
import { TutorialPage } from '../pages/tutorial/tutorial';


import { DistrictService }  from '../providers/district.service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    public districtService: DistrictService,
    public storage: Storage
  ) {
    this.storage.get('hasSeenTutorial')
      .then((hasSeenTutorial) => {
        if (hasSeenTutorial) {
          this.rootPage = DistrictMasterPage;
        } else {
          this.rootPage = TutorialPage;
        }
        this.initializeApp()
      });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accounts', component: DistrictMasterPage },
      { title: 'User Info', component: UserDetailsPage },
      { title: 'Support', component: SupportPage },
      { title: 'Show Tutorial', component: TutorialPage },
    ];

    districtService.load();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
