import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatTableExporterModule} from "mat-table-exporter";


@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    SharedModule,
    TasksRoutingModule,
    MatTableExporterModule
  ]
})
export class TasksModule { }
