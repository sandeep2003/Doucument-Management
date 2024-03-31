import { ColorConfigService } from 'src/app/users/config/colorConfig.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { config } from '@core/interfaces/api_baseurl';
import { AuthService } from '@core/services/auth.service';
import { StoreService } from '@core/services/store.service';
import { SwalService } from '@core/services/swal.service';
import Swal from 'sweetalert2';
import { RiCustomMdlService } from '@core/custom-otp-modal/ri-custom-mdl/ri-custom-mdl.service';
import { ToasterService } from '@core/services/toaster.service';
// import { setTimeout } from 'timers';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit{
  @ViewChild('searchapi') searchapi!: ElementRef
  private _unsubscribeAll: Subject<any>;
  isEnv: boolean = false;
  valEnv: boolean = false;
  isShown: boolean = false;
  localload: boolean = false;
  userType: any;
  userInfo: any;
  userData: any;
  firstLetter: any;
  balance: any;
  keyword:any = '';
  // apiData:any = [];
  envUser: any;
  currentRoute: any;
  expression: boolean = false;
  isLogo: boolean = false;
  logo: any;
  url: any;
  envval: any;
  mdlId: any = 'livemdl';
  mdlIdapi: any = 'mdlIdapi';
  brandLogo: any;
  localLogo: any = 'assets/images/sprintverify-logo.png';
  usertype: any;
  userEnv: any;
  apIInput: any;
  kycApproval: any;
  @Input() pagetitle: any = '';
  populardata: any = [];
  search_result: any = [];
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private auth: AuthService,
    private store: StoreService,
    private router: Router,
    public _RiCustomMdlService: RiCustomMdlService,
    private _ColorConfigService: ColorConfigService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.envval = sessionStorage.getItem('env');
    this._ColorConfigService.$colorConfig.subscribe((res: any) => {
      if (res) {
        this.brandLogo = res.logo;
      }
    });

  }





  menuadd() {
    this.document.body.classList.toggle('dashboard-compact');
  }
  // menuremove() {
  //   this.document.body.classList.remove('dashboard-compact');
  // }
  showhide() {
    if (!this.isShown) {
      this.isShown = true;
      this.document.body.classList.add('sidebar-noneoverflow');
      this.auth.toggleCols(true);
    } else {
      this.isShown = false;
      this.document.body.classList.remove('sidebar-noneoverflow');
      this.auth.toggleCols(false);
    }
  }

  logout() {
    this.store.clearSessionStorage();
    this.router.navigate(['/auth/login']);

  }

  config(id: any) {
    this.router.navigate(['/dashboard/config', { id: btoa(id.toString()) }]);
  }


  createVpa() {
    const formdata = new FormData();
    this.auth
      .postdata(formdata, config.sidemenu_live_sandbox.createva)
      .subscribe((res: any) => {
        // does not do anything
      });
  }

  // openModel(){
  //   this._RiCustomMdlService.open(this.mdlId);
  // }
  convertUppercase(val: any) {
    return val?.toUpperCase();
  }

  changeEnv(val: any) {
    if (val == false) {
      this.valEnv = !this.valEnv;
      this.envval = 2;
    }
    if (val == true) {
      this.valEnv = !this.valEnv;
      this.envval = 1;
      // this.auth.setEnvironment(this.envval);
    }
    try {
      const formdata = new FormData();
      formdata.append('app_env', this.envval);
      this.auth
        .postdata(formdata, config.sidemenu_live_sandbox.live)
        .subscribe((res: any) => {
          sessionStorage.removeItem('env');
          sessionStorage.setItem('env', res.user_env);
          if (this.envval == 2 && this.userData.userdata.is_kyc == 0) {
            this.createVpa();
            this._RiCustomMdlService.open(this.mdlId);
          }
          if (this.envval == 2 && this.userData.userdata.is_kyc == 1) {
            // this.createVpa();
            setTimeout(() => {
              this.router.navigate(['/dashboard/dashboard']);
              location.reload();
            }, 800);
          }
          if (this.envval == 1) {
            this.router.navigate(['/dashboard/dashboard']);
            setTimeout(() => {
              location.reload();
            }, 800);
          }
        });
    } catch (error) {
      Swal.fire(`${error}`);
    }
  }

  popularHit() {
    let f = new FormData();
    f.append('search', '');
    this.auth.postdata(f, config.header.search_api).subscribe((res: any) => {
      this.populardata = res.data.popular_apis;
    });
  }

  click_now() {
    this.router.navigate(['/dashboard/my-services/kyc-process']);
    this._RiCustomMdlService.close(this.mdlId);
  }

  leter() {
    try {
      this.valEnv = !this.valEnv;
      this.envval = 1;
      const formdata = new FormData();
      formdata.append('app_env', this.envval);
      this.auth
        .postdata(formdata, config.sidemenu_live_sandbox.live)
        .subscribe((res: any) => {
          sessionStorage.removeItem('env');
          sessionStorage.setItem('env', res.user_env);
          this.router.navigate(['/dashboard/dashboard']);
        });
    } catch (error) {
      Swal.fire(`${error}`);
    }
    this._RiCustomMdlService.close(this.mdlId);

  }
  // click_Later(){
  //   this.valEnv = false;
  //   this._RiCustomMdlService.close(this.mdlId);
  // }
  onClearSearch(){}
  onFocused(e:any){}
  onChangeSearch(e:any){
   let value=e.target.value;
    if(value.length > '1'){
     let f = new FormData();
     f.append('search',value)
     this.auth.postdata(f,config.header.search_api).subscribe((res: any) => {
        if(res.statuscode ==200){
          this.search_result = res?.data?.search_result;
        }
     });
    }
  }
  // selectuser(e:any){
  //   console.log(e.target.value)
  //   if(e.url){
  //     this._RiCustomMdlService.close(this.mdlIdapi);
  //      this.router.navigate([e.url])
  //   }

  // }
}
