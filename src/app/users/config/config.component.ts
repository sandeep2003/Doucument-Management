import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { config } from '@core/interfaces/api_baseurl';
import { AuthService } from '@core/services/auth.service';
import { SeoService } from '@core/services/seo.service';
import { SwalService } from '@core/services/swal.service';
import { ToasterService } from '@core/services/toaster.service';
import { pairwise } from 'rxjs';
import { ColorConfigService } from './colorConfig.service';
import { StoreService } from '@core/services/store.service';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements AfterViewInit, OnInit {
  logoLinkdomain: any;
  faviconLinkdomain: any;
  id: any;
  Form: any = UntypedFormGroup;
  submitted: boolean = false;
  logo: any;
  showLogo: any;
  isLogo: boolean = false;
  primeDefVal: any;
  logoLink: any;
  faviconLink: any;
  keyword = 'name';
  userData: any;


  // firstGrd: FormControl = new FormControl();
  // secondGrd: FormControl = new FormControl();
  // buttonGrd: FormControl = new FormControl();
  // buttonGrdsecond: FormControl = new FormControl();
  // borderColor: FormControl = new FormControl();
  cookieValue: any;
  colorInput: any;

  // public editor: any = ClassicEditor;

  // login_text: any
  constructor(
    private fb: UntypedFormBuilder,
    private _seoService: SeoService,
    private _auth: AuthService,
    private swal: SwalService,
    private toast: ToasterService,
    private _ColorConfigService: ColorConfigService,
    private store: StoreService,
    private router: Router,
    private activeroute: ActivatedRoute

  ) {
    this.Form = this.fb.group({
      sub_domain: [''],
      brand_name: ['',[Validators.required]],
      fav_icon: ['',[Validators.required]],
      login_text: ['',[Validators.required]],
      logo: [''],
      colorGroup: this.fb.group({
        firstGrd: [''],
        secondGrd: [''],
        buttonGrd: [''],
        buttonGrdsecond: [''],
        borderColor: [''],
      }),
    });
    this._seoService.setSeoData('Set Config');

    // this.colorValueSet();
  }

  ngOnInit(): void {
    this.userData = this.store.get('details');


    if(this.userData.userdata.usertype == 3 || this.userData.userdata.is_kyc == 1){
      this.router.navigate(['/dashboard/config']);
    }else{
      this.router.navigate(['/dashboard/dashboard']);
    }
    this.onChanges();
    this._ColorConfigService.$colorConfig.subscribe((res: any) => {
      if (res) {


        this._colorGroup.patchValue(
          {
            firstGrd: res.primary_color,
            secondGrd: res.secendary_color,
            buttonGrd: res.btn_grad_secondary,
            buttonGrdsecond: res.btn_grad_primary,
            borderColor: res.border_color,
          },

          { emitEvent: false }
        );

        if(res.sub_domain != 'undefined'){
          this.logoLinkdomain = res.logo;
          this.faviconLinkdomain = res.fav_icon;
          this.Form.patchValue({
            sub_domain: res.sub_domain,
            brand_name: res.brand_name,
            fav_icon: res.fav_icon,
            login_text: res.login_text,
            logo: res.logo,
          });
        }


      }
    });

  }

  ngAfterViewInit(): void {}


  onChanges(): void {
    this._colorGroup.valueChanges
      .pipe(pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        if (prev.firstGrd !== next.firstGrd) {
          document.documentElement.style.setProperty(
            `--primary-color`,
            next.firstGrd
          );
        }
        if (prev.secondGrd !== next.secondGrd) {
          document.documentElement.style.setProperty(
            `--secendary-color`,
            next.secondGrd
          );
        }

        if (prev.buttonGrd !== next.buttonGrd) {
          document.documentElement.style.setProperty(
            `--btn-grad-primary`,
            next.buttonGrd
          );
        }

        if (prev.buttonGrdsecond !== next.buttonGrdsecond) {
          document.documentElement.style.setProperty(
            `--btn-grad-secondary`,
            next.buttonGrdsecond
          );
        }

        if (prev.borderColor !== next.borderColor) {
          document.documentElement.style.setProperty(
            `--border-color`,
            next.borderColor
          );
        }
      });
  }
  get _colorGroup() :FormGroup {
    return this.Form.get('colorGroup') as FormGroup;
  }
  resetColor() {
    this._ColorConfigService.setLocalSotrage(null);
  }


  get getControl() {
    return this.Form.controls;
  }

  onChange(event: any, favicon: string) {
    let file = event.target.files[0];
    // this.onUpload(file, favicon);
  }
  // onUpload(file: any, fav: string) {
  //   if (file) {
  //     this.fileUploadService.upload(file).subscribe((event: any) => {
  //       if (typeof event === 'object') {
  //         if (fav == 'favicon') {
  //           this.faviconLink = event.link;
  //         } else {
  //           this.logoLink = event.link;
  //         }
  //       }
  //     });
  //   }
  // }

  // onChange(event: any) {
  //   this.logo = event.target.files[0];
  // }

  submitForm() {
    if (!this.Form.valid) {
      return;
    } else {
      const formdata = new FormData();
      // formdata.append('sub_domain', this.Form.get('sub_domain').value);
      formdata.append('logo', this.logoLink ?? this.logoLinkdomain);
      formdata.append('fav_icon', this.faviconLink ?? this.faviconLinkdomain);
      formdata.append('login_text', this.Form.get('login_text').value);
      formdata.append('brand_name', this.Form.get('brand_name').value);
      formdata.append(
        'primary_color',
        this._colorGroup.controls['firstGrd'].value
      );
      formdata.append(
        'secendary_color',
        this._colorGroup.controls['secondGrd'].value
      );
      formdata.append(
        'btn_grad_primary',
        this._colorGroup.controls['buttonGrd'].value
      );
      formdata.append(
        'btn_grad_secondary',
        this._colorGroup.controls['buttonGrdsecond'].value
      );
      formdata.append(
        'border_color',
        this._colorGroup.controls['borderColor'].value
      );
      this._auth
        .postdata(formdata, config.config.createLogo)
        .subscribe((res: any) => {
          if (res.statuscode == 200 && res.status) {
            this._ColorConfigService.setLocalSotrage(this.Form.value);
            this.toast.showSuccess(res.message, 'sucess');
          } else {
            this.swal.errorMessage(res.message);
          }
        });
    }
  }
  selectuser(e:any){

  }
  onClearSearch(){

  }
  onFocused(e:any){

  }
  getServerResponse(val:any){
    const formdata = new FormData();

    formdata.append('search',val)
    this._auth
    .postdata(formdata,config.auth.getuser)
    .subscribe((res: any) => {
      var arr = [];
      for (var v of res.data) {
        arr.push({ id: v.id, name: v.username });
      }
      this.userData = arr;

    });
  }
  onChangeSearch(e:any){

  }
}
