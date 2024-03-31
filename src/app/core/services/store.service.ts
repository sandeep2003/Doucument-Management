import { Injectable } from '@angular/core';
import { EncodeDecode } from '@core/directives/encode-decode';
import {  BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  userData = new BehaviorSubject('');
  constructor() { }
  has(key: string) {
    const data = sessionStorage.getItem(key);
    return (data ? true : false);
  }
  set(key: string, value: any) {
    sessionStorage.setItem(key, value);
    // if (typeof value === 'object') {
    //   let decode: any = EncodeDecode(JSON.stringify(value), 'n');
    //   sessionStorage.setItem(key, decode);
    // }else{
    //   sessionStorage.setItem(key, value);
    // }

  }
  get(key: string) {
    let data:any;
    data = sessionStorage.getItem(key);
    // if(key == 'details'){
    //  data = EncodeDecode('n', sessionStorage.getItem(key));
    // }else{
    //   data = sessionStorage.getItem(key);
    // }

    if (data) {
      if (this.isJsonString(data)) {
        return JSON.parse(data);
      }
      return data;
    }
    return false;
  }
  remove(key: string) {
    sessionStorage.removeItem(key);
  }
  clearSessionStorage() {
    sessionStorage.clear()
  }
  isJsonString(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  setUserData(data:any){
    this.userData.next(data)
  }
  getUserData(){
    return this.userData;
  }

}
