import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { PytTblTopBoxComponent } from '../core/pytCustTbl/pyt-tbl-top-box/pyt-tbl-top-box.component';
import { PytPaginationComponent } from '../core/pytCustTbl/pytPagination/pyt-pagination/pyt-pagination.component';
import { CustomOtpComponent } from '@core/custom-otp-modal/custom-otp/custom-otp.component';
import { RiCustomMdlComponent } from '@core/custom-otp-modal/ri-custom-mdl/ri-custom-mdl.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ShowServiceModalComponent } from '@core/show-service-modal/show-service-modal.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LoaderComponent } from '../loader/loader.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgxLoadingXConfig, NgxLoadingXModule, POSITION, SPINNER } from 'ngx-loading-x';
import { NgOtpInputModule } from  'ng-otp-input';
import {  BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelect2Module } from 'ng-select2';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ColorPickerModule } from 'ngx-color-picker';
import { CarouselModule } from 'ngx-bootstrap/carousel';


const ngxLoadingXConfig: NgxLoadingXConfig = {
  show: false,
  bgBlur: 2,
  bgOpacity: 5,
  bgLogoUrl: '',
  bgLogoUrlPosition: POSITION.topLeft,
  bgLogoUrlSize: 100,
  spinnerType: SPINNER.xBallSpin,
  spinnerSize: 70,
  spinnerColor: 'var(--secendary-color)',
  spinnerPosition: POSITION.centerCenter,
}
@NgModule({
  declarations: [
    PytPaginationComponent,
    PytTblTopBoxComponent,
    CustomOtpComponent,
    RiCustomMdlComponent,
    ShowServiceModalComponent,
    LoaderComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AutocompleteLibModule,
    NgMultiSelectDropDownModule,
    DragDropModule,
    NgOtpInputModule,
    BsDatepickerModule.forRoot(),
    OverlayModule,
    NgxLoadingXModule.forRoot(ngxLoadingXConfig),
    NgSelect2Module,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    ColorPickerModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    BsDatepickerModule,
    PytTblTopBoxComponent,
    PytPaginationComponent,
    RiCustomMdlComponent,
    CustomOtpComponent,
    AutocompleteLibModule,
    LoaderComponent,
    ShowServiceModalComponent,
    NgMultiSelectDropDownModule,
    OverlayModule,
    NgxLoadingXModule,
    NgOtpInputModule,
    NgSelect2Module,
    CollapseModule,
    ColorPickerModule,
    CarouselModule
  ],
})
export class SharedModule {}
