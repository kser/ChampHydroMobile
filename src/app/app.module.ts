import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { DistrictMasterPage } from '../pages/district-master/district-master';
import { DistrictDetailPage } from '../pages/district-detail/district-detail';
import { ProjectDetailPage } from '../pages/project-detail/project-detail';
import { ItemCreatePage } from '../pages/item-create/item-create';

import { DistrictService }  from '../providers/district.service';


@NgModule({
  declarations: [
    MyApp,
    DistrictMasterPage,
    DistrictDetailPage,
    ProjectDetailPage,
    ItemCreatePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DistrictMasterPage,
    DistrictDetailPage,
    ProjectDetailPage,
    ItemCreatePage
  ],
  providers: [ DistrictService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
