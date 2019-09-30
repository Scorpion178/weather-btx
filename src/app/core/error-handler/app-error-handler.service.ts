import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NzMessageService } from 'ng-zorro-antd/message';


@Injectable()
export class AppErrorHandler extends ErrorHandler {
  constructor(private message: NzMessageService) {
    super();
  }

  handleError(error: Error | HttpErrorResponse) {
    let displayMessage = 'Ocurrió un error.';

    if (!environment.production) {
      displayMessage += ' Ver consola para más detalles.';
    }

    this.message.create('error', displayMessage);

    super.handleError(error);
  }
}
