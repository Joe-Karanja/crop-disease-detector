import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    BarChartsComponent
  ],
  exports: [
    BarChartsComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    NgxChartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AnalyticsModule { }
