import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { WeatherService } from '@core/services/weather.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  inputValue: string="";
  filteredOptions: string[] = [];
  options: any[];

  currentWeather: object;
  sevenDayWeather: object;

  printWeather: object;

  activeloadingfull:boolean = false;
  temp:string = 'c'; // 'f'
  selectDay:number = 1;

  constructor(public _weatherService:WeatherService) {
  }

  ngOnInit() {
    this.getWeatherSedes();
  }

  // CARGANDO LAS SEDES
  getWeatherSedes(){
    this.options = this._weatherService.getHeadquarters();
    this.filteredOptions = this.options;
  }

  getCurrent(city:string){
    this._weatherService.getCurrentWeather(city).pipe(take(1))
      .subscribe((res: any) => {
        if (res) {
          this.currentWeather = res;
          this.setPrintWeather(res,true);
        }
        this.activeloadingfull = false;
      }, (err: HttpErrorResponse) => {
        this.activeloadingfull = false;
        if (err.error instanceof Error) {
          console.log('Client-side error occured: ', err);
        } else {
          console.log('Server-side error occured: ', err);
        }
      });
  }

  getSevenDays(city:string){
    this._weatherService.getSevenDayWeather(city).pipe(take(1))
      .subscribe((res: any) => {
        if (res) {
          this.sevenDayWeather = res;
        }
      });
  }

  setPrintWeather(day:object,init:boolean=false){
    if(init){
      let data:any = day;
      this.printWeather = {
        'city': data.location.name,
        'localtime': data.location.localtime,
        'condition': data.current.condition.text,
        'icon': data.current.condition.icon,
        'temp_c': data.current.temp_c,
        'temp_f': data.current.temp_f,
        'precip': data.current.precip_mm,
        'humidity': data.current.humidity,
        'wind_kph': data.current.wind_kph,
      };
    }else{
      let data:any = day;
      this.printWeather['localtime'] = `${data.date} ${data.astro.sunset}`;
      this.printWeather['condition'] = data.day.condition.text;
      this.printWeather['icon'] = data.day.condition.icon;
      this.printWeather['temp_c'] = data.day.maxtemp_c;
      this.printWeather['temp_f'] = data.day.maxtemp_f;
      this.printWeather['precip'] = data.day.totalprecip_mm;
      this.printWeather['humidity'] = data.day.avghumidity;
      this.printWeather['wind_kph'] = data.day.maxwind_kph;
    }
  }

  // EVENTOS DEL INPUT
  searchInput(){
    if(this.inputValue.length >=2){
      let searchOption:any[] = this.options.filter(option => (option.name).toLowerCase().indexOf(this.inputValue.toLowerCase()) == 0);
      if(searchOption[0]!=null && searchOption!=[]) this.search(searchOption[0].city);
    }
  }
  search(city:string){
    this.activeloadingfull= true;
    this.getCurrent(city);
    this.getSevenDays(city);
  }
  onInput(value: string): void {
    this.filteredOptions = this.options.filter(option => (option.name).toLowerCase().indexOf(value.toLowerCase()) >= 0);
  }
}
