import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportsComponent } from './reports/reports.component';
import {MatTableExporterModule} from "mat-table-exporter";

@NgModule({
    imports: [
        CommonModule,
        ReportsRoutingModule,
        SharedModule,
        MatTableExporterModule
    ],
  declarations: [
    ReportsComponent
  ],
  entryComponents: [
  ]
})
export class ReportsModule { }
