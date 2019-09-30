import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: 'weathers',
    loadChildren: './features/weather/weather.module#WeatherModule',
  },
  { path: '**', pathMatch: 'full', redirectTo: 'weathers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
