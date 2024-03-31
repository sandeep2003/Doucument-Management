import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ColorConfigService {
  colorConfig: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  ckycData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  getLogoData:any;
  get $ckycData(){
    return this.ckycData.asObservable()
  }
  get $colorConfig() {
    return this.colorConfig.asObservable();
  }
  constructor(private _AuthService: AuthService) {


    // setTimeout(() => {
      var isAuthenticated = this._AuthService.getAuthStatus();
      // if (localStorage.getItem('colorConfigData')) {
      //   let obj: any = localStorage.getItem('colorConfigData');
      //   obj = JSON.parse(obj);
      //   this.setLocalSotrage(obj);
      // } else {
    //   }
    // }, 1);
  }
  setckyc(data?:any){
    this.ckycData.next(data)
  }

  setLocalSotrage(data?: any) {
    // if (data) {
    //   localStorage.setItem('defColorData', JSON.stringify(data));
    // }

    let colorData: any = {
      primary_color: data?.primary_color ?? data?.colorGroup.firstGrd ?? '#FF0000', //firstGrd
      secendary_color: data?.secendary_color ?? data?.colorGroup.secondGrd ?? '#800000', //secondGrd
      btn_grad_primary:data?.btn_grad_primary ?? data?.colorGroup.buttonGrdsecond ?? '#FFDD34',  //buttonGrdsecond
      border_color: data?.border_color ?? data?.colorGroup.borderColor ?? '#FF0000', //borderColor
      btn_grad_secondary:data?.btn_grad_secondary ?? data?.colorGroup.buttonGrd ?? '#DE0000', //buttonGrd
    };
    data = {
      ...data,
      ...colorData,
    };


    for (const key in colorData) {
      const val = colorData[key];
      this.setPortalColor('--' + key.replaceAll('_', '-'), val);
    }
    this.getLogoData=data;
    this.colorConfig.next(data);
    localStorage.setItem('colorConfigData', JSON.stringify(data));
  }
  setDefColor() {
    // let obj: any = localStorage.getItem('defColorData');
    // obj = JSON.parse(obj);
    this.setLocalSotrage(this.getLogoData);
  }
  // resetLocalSotrage() {
  //   localStorage.removeItem('defColorData');
  //   localStorage.removeItem('colorConfigData');
  // }

  setPortalColor(property: string, value: string) {
    document.documentElement.style.setProperty(property, value);

  }
}
