import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    HttpClientModule, 
    HttpClientJsonpModule,
    SharedModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
