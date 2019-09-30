import { NgModule, ErrorHandler } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'

import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { AppErrorHandler } from './error-handler/app-error-handler.service';


const COMPONENTS = []

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
})
export class CoreModule {}
