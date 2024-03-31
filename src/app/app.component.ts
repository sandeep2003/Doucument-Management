import { async } from '@angular/core/testing';

import {
  Component,
  OnInit,
  EventEmitter,
  OnDestroy,
  Input,
  Output,
} from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { ColorConfigService } from './users/config/colorConfig.service';
import { Title } from '@angular/platform-browser';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '';
  // @Input() brandLogo:any;
  favIcon: HTMLLinkElement = document.querySelector('#appIcon')!;
  // title:HTMLLinkElement = document.querySelector('#appTitle')!;
  constructor(
    private _ColorConfigService: ColorConfigService,
    private auth: AuthService,
    private titleService: Title
  ) {
    // document.documentElement.style.setProperty(
    //   '--primary-color',
    //   localStorage.getItem('--primary-color')
    // );
    // document.documentElement.style.setProperty(
    //   '--secendary-color',
    //   localStorage.getItem('--secendary-color')
    // );
    // document.documentElement.style.setProperty(
    //   '--btn-grad-primary',
    //   localStorage.getItem('--btn-grad-primary')
    // );
    // document.documentElement.style.setProperty(
    //   '--btn-grad-secondary',
    //   localStorage.getItem('--btn-grad-secondary')
    // );
    // document.documentElement.style.setProperty(
    //   '--border-color',
    //   localStorage.getItem('--border-color')
    // );
    // let obj1 = {
    //   firstGrd: '#ec1313',
    //   secondGrd: '#2d6a8f',
    //   buttonGrd: '#ce6d2c',
    //   buttonGrdsecond: '#e3e633',
    //   borderColor: '#3f0d0d',
    // };
    // let obj2 = {
    //   firstGrd: '#5139c6',
    //   secondGrd: '#76c680',
    //   buttonGrd: '#8362d0',
    //   buttonGrdsecond: '#afaf23',
    //   borderColor: '#2d3386',
    // };
    // let obj3 = {
    //   firstGrd: '#546455',
    //   secondGrd: '#3e5cb6',
    //   buttonGrd: '#3c3a41',
    //   buttonGrdsecond: '#4991ee',
    //   borderColor: '#4fb07e',
    // };
    // this._ColorConfigService.setLocalSotrage(obj3);
  }

  // title: any;
  type: number = 0;
  ngOnInit(): void {
    this._ColorConfigService.$colorConfig.subscribe((res: any) => {
      if (res == null) {
        return;
      } else {
        if (res.statuscode == 200 && res.brand_name != 'undefined' &&  res.fav_icon != 'undefined') {
          this.favIcon.href = res.fav_icon;
          this.titleService.setTitle(res.brand_name);
        }
      }
    });

    $('.main-content').click(function () {});
  }
}
