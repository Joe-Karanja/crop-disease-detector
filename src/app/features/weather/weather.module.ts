import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
    declarations: [
        WeatherComponent
    ],
    exports: [
        WeatherComponent
    ],
    imports: [
        CommonModule,
        WeatherRoutingModule,
        FormsModule
    ]
})
export class WeatherModule { }
