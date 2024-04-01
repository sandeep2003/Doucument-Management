import { StoreService } from '@core/services/store.service';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
  Inject,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { fromEvent } from 'rxjs';
import { config } from '@core/interfaces/api_baseurl';
import { AuthService } from '@core/services/auth.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ColorConfigService } from 'src/app/users/config/colorConfig.service';

declare var App: any;

@Component({
  selector: 'relipay-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebar', { static: true }) sidebar!: ElementRef;
  @ViewChild('subNavList') subList!: ElementRef;
  // @ViewChild('child-wrap') navList!: ElementRef;
  activeOptionparent: any = -1;
  Subactive: any;
  sidemenuData: any;
  array: any;
  userInfo: any;
  currentPageUrl: any;
  environSetup: any;
  activeOptionsubchild: any;
  geturlPoints: any = {};
  @Output() pagetitle: EventEmitter<any> = new EventEmitter();

  originalOrder = (): number => {
    return 0;
  };
  childmenu: any;
  subchild: any;
  parentmenu: any;
  brandLogo = '';
  marginTop: any;
  submarginTop: any;
  conMargin: any = 0;
  submargin: any;
  deviceBreakpint: boolean = false;
  constructor(
    private _auth: AuthService,
    private store: StoreService,
    private router: Router,
    private _ColorConfigService: ColorConfigService,
    public responsive: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document
  ) {
    // this._auth.getEnvironment.subscribe((res: any) => {
    //   this.environSetup = res;
    //   const formdata = new FormData();
    //   formdata.append('app_env', this.store.get('env'));
    //   this._auth
    //     .postdata(formdata, config.sidemenu_live_sandbox.live)
    //     .subscribe((res: any) => {
    //       if (res.statuscode == 200) {
    //         this.sidemenuData = res.data.children;
    //         // this.sidemenuData = this.data.children;
    //         sessionStorage.removeItem('env');
    //         sessionStorage.setItem('env', res.user_env);
    //       }
    //     });
    // });
  }

  ngOnInit(): void {
    this._ColorConfigService.$colorConfig.subscribe((res: any) => {
      if (res == null) {
        return;
      } else {
        if(res.logo != 'undefined' && res.logo != null && res.logo != '') {
          this.brandLogo = res.logo;
        } else {
          this.brandLogo = '';
        }
      }
    });

    this.responsive
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          //  console.log("small",Breakpoints.Small,"xs",Breakpoints.XSmall)
          this.deviceBreakpint = true;
        } else {
          this.deviceBreakpint = false;
          // console.log("small",Breakpoints.Small,"xs",Breakpoints.XSmall)
        }
      });

    let splits = this.router.url.split('/');
    this.geturl(splits);
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        splits = event.url.split('/');

        this.geturl(splits);
      }
    });
  }
  geturl(splits: any) {
    const filter = splits.filter((el: any) => {
      return el;
    });
    this.geturlPoints.mainmenu = filter[1]
      ?.toUpperCase()
      .replace('-', ' ')
      .replace('-', ' ');
    this.geturlPoints.menu = filter[2]
      ?.toUpperCase()
      .replace('-', ' ')
      .replace('-', ' ');
    this.geturlPoints.submenu = filter[3]
      ?.toUpperCase()
      .replace('-', ' ')
      .replace('-', ' ');
    const pagetitle = this.geturlPoints.submenu
      ? this.geturlPoints.submenu
      : this.geturlPoints.menu
      ? this.geturlPoints.menu
      : this.geturlPoints.mainmenu;
    //  console.log(this.geturlPoints.submenu)
    setTimeout(() => {
      this.setpagetitle(pagetitle);
    }, 0);
  }

  showtoggle(value: any) {
    this.geturlPoints.mainmenu = value.toUpperCase().replace('-', ' ');
  }
  showdashboard(value: any) {
    this.geturlPoints.mainmenu = value.toUpperCase().replace('-', ' ');
    this.pagetitle.emit(value);
    this.menuremove();
  }
  setpagetitle(pagetitle: any, e?: any) {
    if (e) {
      e.stopPropagation();
    }
    this.geturlPoints.submenu = pagetitle;
    this.pagetitle.emit(pagetitle);
    this.menuremove();
  }
  menuremove() {
    this.document.body.classList.remove('dashboard-compact');
  }
}
