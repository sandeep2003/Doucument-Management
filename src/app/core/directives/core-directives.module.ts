import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PytCustTblPagerDirective } from '../pytCustTbl/pytPagination/pyt-cust-tbl-pager.directive';
import { AbstractDebounceDirective } from '../pytCustTbl/debounce/abstract-debounce.directive';
import { SrchDbounceDirective } from '../pytCustTbl/debounce/srch-dbounce.directive';
import { FocusToNextInputDirective } from '../custom-otp-modal/focus-to-next-input.directive';
// import { ResendOtpDirective } from './resend-otp.directive';

@NgModule({
  declarations: [
    PytCustTblPagerDirective,
    AbstractDebounceDirective,
    SrchDbounceDirective,
    FocusToNextInputDirective,

  ],
  imports: [CommonModule],
  exports: [
    PytCustTblPagerDirective,
    AbstractDebounceDirective,
    SrchDbounceDirective,
    FocusToNextInputDirective,

  ],
  providers: [],
})
export class CoreDirectivesModule {}
