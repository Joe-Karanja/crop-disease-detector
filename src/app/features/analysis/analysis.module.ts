import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisComponent } from './analysis/analysis.component';
import {SharedModule} from "../../shared/shared.module";
import {MatTabsModule} from "@angular/material/tabs";
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatTableExporterModule} from "mat-table-exporter";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {AnalyticsModule} from "../analytics/analytics.module";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { NgxImageDisplayModule } from '@creativeacer/ngx-image-display';


@NgModule({
  declarations: [
    AnalysisComponent
  ],
    imports: [
        CommonModule,
        AnalysisRoutingModule,
        SharedModule,
        MatTabsModule,
        DragDropModule,
        NgxDropzoneModule,
        MatTableExporterModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        AnalyticsModule,
        NgxChartsModule,
        NgxImageDisplayModule.forRoot()
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  exports: []
})
export class AnalysisModule { }
