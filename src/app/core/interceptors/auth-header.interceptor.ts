import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { ToasterService } from './../services/toaster.service';
import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import {
  catchError,
  map,
  Observable,
  throwError,
} from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { LoaderService } from '@core/services/loader.service';
import { StoreService } from '@core/services/store.service';
import Swal from 'sweetalert2';
// import { VerificationService } from 'src/app/verification/verification.service';
import * as _ from 'lodash';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor, OnDestroy {
  fetchsServiceToken: any;
  AccessServiceToken: any;
  getData: any;

  constructor(
    private authService: AuthService,
    private loader: LoaderService,
    private store: StoreService,
    private toaster: ToasterService,
    // private verfiyService!: VerificationService,
  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loader.show();

    if (this.store.has('details')) {
      var data = this.store.get('details');
      request = request.clone({
        headers: request.headers.set('token', data),
      });
    }
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status == 401) {
          this.loader.hide();
          this.authService.logout();
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: 'warning',
            title: 'Session Expired!!',
          });
        } else if (err.status === 500) {
          this.loader.hide();
          this.toaster.showError('Something went wrong!!', 'error');
        }
        const error = err.error.message || err.statusText;
        console.log('error', error);

        return throwError(() => error);
      }),

      map((event) => {
        //  let $next = false;
        if (event instanceof HttpResponse) {
          this.loader.hide();
        }

        return event;
      })
    );
  }

  ngOnDestroy() {
    // this.verfiyService.resetToDefaults();
  }
}
