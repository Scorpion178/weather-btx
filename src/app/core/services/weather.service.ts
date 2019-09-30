import { Injectable } from '@angular/core';
// import { HttpClienteService } from './api/http-cliente.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  headquarters:any[] = [
    {
      'name': 'Argentina/Mendoza',
      'city':'mendoza',
      'latlong':'',
      'uszipcode':'',
      'ukpostcode':'',
      'canadapostcode':'',
      'ipaddress':'',
    },
    {
      'name': 'Argentina/Buenos Aires',
      'city':'buenos aires',
      'latlong':'',
      'uszipcode':'',
      'ukpostcode':'',
      'canadapostcode':'',
      'ipaddress':'',
    },
    {
      'name': 'Colombia/Bogotá',
      'city':'bogota',
      'latlong':'',
      'uszipcode':'',
      'ukpostcode':'',
      'canadapostcode':'',
      'ipaddress':'',
    },
    {
      'name': 'Perú/Lima',
      'city':'lima',
      'latlong':'',
      'uszipcode':'',
      'ukpostcode':'',
      'canadapostcode':'',
      'ipaddress':'',
    },
  ];

  private API_URL_CURRENT_WEATHER = `${environment.btx.url}current.json?key=${environment.btx.key}&q=`;
  private API_URL_FORECAST_WEATHER = `${environment.btx.url}forecast.json?key=${environment.btx.key}&q=`;

  constructor(private http: HttpClient) { }

  getCurrentWeather(value): Observable<any>{
    return this.http.get(this.API_URL_CURRENT_WEATHER+value);
  }
  getSevenDayWeather(value): Observable<any>{
    return this.http.get(this.API_URL_FORECAST_WEATHER+value+'&days=7');
  }
  getHeadquarters(){
    return this.headquarters;
  }
}
