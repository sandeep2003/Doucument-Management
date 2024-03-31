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

  ngOnInit(): void {  }
  menuadd() {
    this.document.body.classList.toggle('dashboard-compact');
  }

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
}
