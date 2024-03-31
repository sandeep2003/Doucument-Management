import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class SwalService {
  arr:any=[]
  constructor() { }

  alertMessage(statuscode?: any, message?: string){
    if(statuscode ==200){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
    }
    else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: message,
        showConfirmButton: false,
        timer: 3000
      });
    }
  }

  errorMessage(data?:any){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: data,
    })
  }

  errorMessageforform(data?: any) {
    this.arr = [];
    for (const property in data) {
      this.arr.push(data[property]);
    }
   
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      html: this.arr.toString().replace(',','</br>'),
    })
  }

}
