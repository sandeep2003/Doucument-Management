import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ColorConfigService } from 'src/app/users/config/colorConfig.service';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  currentUrl: any;
  mobile: any;
  localLogo: any = 'assets/images/sprintverify-logo.png';
  brandLogo: any;
  loginText: any="Document Management";
  isVerifya2z: boolean = false ;
  constructor(
    private route: Router,
    private auth: AuthService,
    private _ColorConfigService: ColorConfigService
  ) {}

  ngOnInit(): void {
    this.currentUrl = window.location.hash;
    this.mobile = this.currentUrl.split('/')[3];
    this._ColorConfigService.$colorConfig.subscribe((res: any) => {
      if (res == null) {
        return;
      } else {
        if (res.statuscode == 200 && res.login_text != 'undefined' &&  res.logo != 'undefined') {
          // this.loginText = res.login_text;
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
}
