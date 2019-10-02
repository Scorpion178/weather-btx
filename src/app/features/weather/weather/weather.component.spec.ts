import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from '@core/services/weather.service';
import { WeatherComponent } from './weather.component';
import { SharedModule } from '@shared/shared.module';

import { HttpClientModule } from '@angular/common/http';

describe('cuando inicia el WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule],
      declarations: [ WeatherComponent ],
      providers: [WeatherService]
    })
    
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
