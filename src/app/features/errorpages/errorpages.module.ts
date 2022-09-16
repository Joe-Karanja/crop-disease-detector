import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorpagesRoutingModule } from './errorpages-routing.module';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [Error404Component, Error500Component],
  imports: [
    CommonModule,
    ErrorpagesRoutingModule,
    MatIconModule,
  ]
})
export class ErrorpagesModule { }
