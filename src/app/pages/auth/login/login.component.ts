import { event } from 'jquery';
import { state } from '@angular/animations';
import { ToasterService } from '@core/services/toaster.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { config } from '@core/interfaces/api_baseurl';
import { AuthService } from '@core/services/auth.service';
import { RiCustomMdlService } from '@core/custom-otp-modal/ri-custom-mdl/ri-custom-mdl.service';
import { Router } from '@angular/router';
import { StoreService } from '@core/services/store.service';

import { SwalService } from '@core/services/swal.service';
import { ColorConfigService } from 'src/app/users/config/colorConfig.service';
import { NgOtpInputComponent } from 'ng-otp-input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  LoginForm!: UntypedFormGroup;

  withMobile:boolean = true
  mdlId: any = 'loginOtpMdl';
  otpClass = "'font-weight-bolder bg-info px-2'";
  otpMobNo = '';
  otplength: number = 4;
  otpcheck: boolean = true;
  brandName: any;
  show_button: Boolean = false;
  show_eye: Boolean = false;
  brandLogo: any;
  public showPasswordOnPress:boolean=false;
  // localLogo: any = 'assets/images/sprintverify-logo.png';
  // public showPasswordOnPress:boolean=false;
  currentURL='';
  localLogo: any = '';
  _show = false
   _pwdType :boolean=false
  isVerifya2z: boolean = false ;
  mobileNo: any;
  length:any =  6
  timerInterval: any;
  showTimer: boolean = false;
  display: any = null ;
  otp_based:boolean = false
  @ViewChild('ng_otp_input') ng_otp_input!: NgOtpInputComponent;
  mobile: any;
  // _show = false
  //  _pwdType = 'password'
  constructor(
    private fb: UntypedFormBuilder,
    private _auth: AuthService,
    public otp_modal_service: RiCustomMdlService,
    private route: Router,
    private store: StoreService,
    private toaster: ToasterService,
    private Swal: SwalService,
    private _ColorConfigService: ColorConfigService
  ) {
    this.currentURL = window.location.href;
    // console.log(this.currentURL);

    this.LoginForm = this.fb.group({
      mobile:['',[Validators.required]],
      email: ['', ],
      password: ['',],
    });
  }

  ngOnInit(): void {
    this._ColorConfigService.$colorConfig.subscribe((res: any) => {
      if (res == null) {
        return;
      } else {
        if (res || res.brand_name != 'undefined' ||  res.logo != 'undefined') {
          this.brandName = res.brand_name;
          this.brandLogo = res.logo;
          if( window.location.origin == "https://verifya2z.com" ){
            this.isVerifya2z = true
          }else{
            this.isVerifya2z = false
          }
        }
      }
    });
  }

  get f() {
    return this.LoginForm.controls;
  }



  loginUser() {
    try {
      this.submitted = true;
      if (this.LoginForm.invalid) {
        return;
      }
      if (this.submitted) {
        let obj:any = {
          mobile_number:this.LoginForm.controls['mobile'].value
        }
        this.mobileNo = this.LoginForm.controls['mobile'].value
        this._auth.postData(obj, '/generateOTP').subscribe((res: any) => {
          if (res.status == true) {
            this.otp_modal_service.open(this.mdlId)
           }
          else {
            this.Swal.errorMessage(res.message);
          }
        });
      }
    } catch (error) {
      this.Swal.errorMessage(error);
    }

  }

  onOtpVerify(otps: any) {
    if (otps.length > 5) {
      let formdata = new FormData();
      formdata.append('mobilenumber', this.mobileNo);
      formdata.append('otp', otps);
      let obj:any = {
        mobile_number : this.mobileNo,
        otp : otps
      }
      this._auth
        .postData(obj, '/validateOTP')
        .subscribe((res: any) => {
          if (res.status === true) {
            console.log(res);

            this.store.set('details', res.data.token);
            this.route.navigate(['/dashboard/dashboard']);
            // this.store.set('env', res.userdata.user_env);
            // this.toaster.showSuccess(res.message, 'success');
          } else {
            this.Swal.errorMessage(res.message);
          }
        });
    }
  }
  back(){
    this.otp_modal_service.close(this.mdlId);
    clearInterval(this.timerInterval);
    setTimeout(() => {
      this.ng_otp_input?.setValue(null);
    }, 1);
  }
}
