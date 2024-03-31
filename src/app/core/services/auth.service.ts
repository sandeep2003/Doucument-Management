import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Observable,
  BehaviorSubject,
  retry,
  catchError,
  throwError,
  Subject,
  from,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { StoreService } from './store.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { config } from '@core/interfaces/api_baseurl';
import { isDevMode } from '@angular/core';
import { EncDecService } from './enc-dec.service';
import { LoaderService } from './loader.service';

const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private environmentApi = new BehaviorSubject<number>(this.store.get('env'));
  public getEnvironment = this.environmentApi.asObservable();
  domainColorConfig: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private subject = new Subject<any>();
  serviceToken: any;
  public setmobileApi = new BehaviorSubject<any>('');
  public getmobileApi = this.setmobileApi.asObservable();

  sendMessage(message: string) {
    this.subject.next(message);
  }

  setEnvironment(val: number) {
    this.environmentApi.next(val);
  }

  //If we want send data with message and obj at same time ;

  sendMessagewithObj(message: string, obj: any) {
    this.subject.next({ text: message, data: obj });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  clearMessages() {
    this.subject.next({});
  }

  sidebarColps: boolean = false;
  private cols = new BehaviorSubject<boolean>(this.sidebarColps);
  updateCols = this.cols.asObservable();

  constructor(
    private http: HttpClient,
    private store: StoreService,
    private router: Router,
    private encryption: EncDecService,
    private loader: LoaderService
  ) {}

  // color change service

  get $domainColorSet() {
    return this.domainColorConfig.asObservable();
  }
  getDomainData() {
    return new Promise((res, rej) => {
      let getLink = 'https://' + window.location.host;
      let forms = new FormData();
      forms.append('sub_domain', getLink);
      this.postdata(forms, config.config.getDefaultColor).subscribe(
        (re: any) => {
          setTimeout(() => {
            res(re);
          }, 1);
        }
      );
    });
  }

  getLoginLogo() {
    return new Promise((reso, rejec) => {
      let getLink = 'https://' + window.location.host;
      let forms = new FormData();
      forms.append('sub_domain', getLink);
      this.postdata(forms, config.config.getDetaills).subscribe((res: any) => {
        setTimeout(() => {
          reso(res);
        }, 1);
      });
    });
  }
  toggleCols(value: boolean) {
    this.cols.next(value);
  }

  getAuthStatus(): boolean {
    return this.store.has('details');
  }

  private hitPostapi(payload?: any, endpoint?: any): Observable<any> {
    const data = this.payloadValidate(payload, true);
    return this.http
      .post<any>(environment.baseurl + endpoint, data)
      .pipe(retry(0), catchError(this.errorHandler));
  }

  //post method with payload
  postData(payload: any, path: string): Observable<any> {
    return this.http
    .post<any>(environment.BASE_URL + path, payload)
    .pipe(retry(0), catchError(this.errorHandler));
  }

  postdata(payload?: any, endpoint?: any): Observable<any> {
    return from(
      new Promise((resolve, reject) => {
        this.hitPostapi(payload, endpoint).subscribe((res: any) => {
          const Decrypt = this.payloadValidate(res, false);
          this.checkValdiSession(Decrypt);
          resolve(Decrypt);
        });
      })
    );
  }

  private checkValdiSession(data: any): void {
    if (data.statuscode == 2001) {
      // this.loader.hide();
      this.logout();
    }
  }

  // postdata(payload?: any, endpoint?: any): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.hitPostapi(payload, endpoint).subscribe((res: any) => {
  //       const Decrypt = this.payloadValidate(res, false);
  //       resolve(Decrypt);
  //     });
  //   })
  // };

  // post methode bank list


  getData(path: any): Observable<any> {
    return this.http
      .get(environment.baseurl + path)
      .pipe(retry(0), catchError(this.errorHandler));
  }

  errorHandler(err: any) {
    let error: any = '';
    if (err.error instanceof ErrorEvent) {
      error = err.error.message;
    } else {
      error = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return throwError(() => error);
  }

  logout() {
    this.router.navigate(['/auth/login']);
    return this.store.clearSessionStorage();
  }

  public exportExcel(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(json);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(
      data,
      fileName + 'file' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  private payloadValidate(obj: any, method: boolean): any {
    // for development mode remove !isDevMode()
    // dont change this it will work autometically for uat build
    if (!isDevMode()) {
      switch (method) {
        case true:
          const formDataObj: any = {};
          if (obj)
            obj.forEach((value: any, key: any) => (formDataObj[key] = value));
          return JSON.parse(this.encryption.Encrypt(formDataObj));
          break;
        default:
          return this.encryption.Decrypt(obj);
          break;
      }
    } else {
      return obj;
    }
  }
}
