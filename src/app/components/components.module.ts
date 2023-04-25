import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecentDataComponent } from 'app/components/recent-data/recent-data.component';
import { StatisticComponent } from 'app/components/statistic/statistic.component';
import { VideoNewsComponent } from 'app/components/video-news/video-news.component';
import { WebsiteFeatureComponent } from 'app/components/website-feature/website-feature.component';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import {AllComponentComponent} from './all-component/all-component.component';
import { HttpClientModule } from '@angular/common/http';
import { RainfallService } from 'app/shared/fetch-api/services/rainfall.service';
import { RainfallComponent } from 'app/components/rainfall/rainfall.component';
import { BgWaterLevelDataPipe } from 'app/shared/pipe/bg-water-level-data.pipe';
import { ClimatologyComponent } from 'app/components/climatology/climatology.component';
import { TelemetryComponent } from 'app/components/climatology/components/telemetri/telemetry.component';
import { ManualComponent } from 'app/components/climatology/components/manual/manual.component';
import { RainfallDialogComponent } from 'app/shared/dialog/rainfall-dialog/rainfall-dialog.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ClimatologyDialogComponent } from 'app/shared/dialog/climatology-dialog/climatology-dialog.component';
import { DialogBasicComponent } from 'app/shared/dialog/basic/dialog-basic.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  declarations: [
    ComponentsComponent,
    BasicelementsComponent,
    NavigationComponent,
    TypographyComponent,
    NucleoiconsComponent,
    NotificationComponent,
    NgbdModalComponent,
    NgbdModalContent,
    WebsiteFeatureComponent,
    RecentDataComponent,
    StatisticComponent,
    VideoNewsComponent,
    AllComponentComponent,
    RainfallComponent,
    BgWaterLevelDataPipe,
    ClimatologyComponent,
    TelemetryComponent,
    ManualComponent,
    RainfallDialogComponent,
    ClimatologyDialogComponent,
    DialogBasicComponent
  ],
  providers: [RainfallService],
  entryComponents: [NgbdModalContent],
  exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
