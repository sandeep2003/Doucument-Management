import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import * as CryptoJS from 'crypto-js';
import { Observable } from 'rxjs';
// import { FileUploadService } from '@core/services/file-upload.service';
@Injectable({
  providedIn: 'root'
})
export class EncDecService {

  private CryptoJSAesJson = {
    stringify: (cipherParams: any) => {
      const vbJsonString: any = {
        hv: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
      };
      if (cipherParams.iv) {
        vbJsonString['iv'] = cipherParams.iv.toString()
      };
      if (cipherParams.salt) {
        vbJsonString['s'] = cipherParams.salt.toString()
      };
      return JSON.stringify(vbJsonString);
    },
    parse: (jsonStr: string) => {
      const vbJsonParse = JSON.parse(jsonStr);
      const cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(vbJsonParse.hv)
      });
      if (vbJsonParse.iv) {
        cipherParams['iv'] = CryptoJS.enc.Hex.parse(vbJsonParse.iv)
      }
      if (vbJsonParse['s']) {
        cipherParams.salt = CryptoJS.enc.Hex.parse(vbJsonParse.s)
      }
      return cipherParams;
    }
  }
  constructor(

  ) { }


  Encrypt = (data: any) => {
    // let finalobj:any = {}
    // let obj:any = {}
    // for(let value in data){
    //   if (typeof data[value] === 'string') {
    //     finalobj[value] = data[value]
    //   }else{

    //       if(data.image1){
    //         this.convertBlobToBase64(data.image1).subscribe((c) => {
    //           finalobj[value]= c;
    //          });
    //         finalobj[value] = obj
    //       }else if(data.image2){
    //         this.convertBlobToBase64(data.image2).subscribe((c) => {
    //           finalobj[value]= c;
    //          });
    //         finalobj[value] = obj
    //       }else if(data.file){
    //         this.convertBlobToBase64(data.file).subscribe((c) => {
    //           finalobj[value]= c;
    //          });
    //         finalobj[value] = obj
    //       // return CryptoJS.AES.encrypt(JSON.stringify(finalobj), 'waAgexGyN', { format: this.CryptoJSAesJson }).toString();
    //     }
    //   }
    // }

    return CryptoJS.AES.encrypt(JSON.stringify(data), 'waAgexGyN', { format: this.CryptoJSAesJson }).toString();
  }

  Decrypt = (data: any) => {
    return JSON.parse(CryptoJS.AES.decrypt(JSON.stringify(data), 'waAgexGyN', { format: this.CryptoJSAesJson }).toString(CryptoJS.enc.Utf8));
  }
  convertBlobToBase64(blob: Blob) {
    return new Observable((observer) => {
      const reader = new FileReader();
      const binaryString = reader.readAsDataURL(blob);
      reader.onload = (event: any) => {
        console.log('Image in Base64: ', event.target.result);
        observer.next(event.target.result);
        observer.complete();
      };

      reader.onerror = (event: any) => {
        console.log('File could not be read: ' + event.target.error.code);
        observer.next(event.target.error.code);
        observer.complete();
      };
    });
  }
}
