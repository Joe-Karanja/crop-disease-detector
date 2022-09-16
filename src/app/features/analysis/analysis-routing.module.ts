import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnalysisComponent} from "./analysis/analysis.component";
import {LayoutComponent} from "../../shared/layout/layout.component";
import {DashboardHomeComponent} from "../dashboard/dashboard-home/dashboard-home.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'analysis', component: AnalysisComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule { }
