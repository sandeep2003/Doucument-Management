import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShowNullResultPipe } from './show-null-pipe/show-null-result.pipe';
import { PytFilterPipe } from '../pytCustTbl/pyt-tbl-pipe/pyt-filter.pipe';
import { JsondataPipe } from './jsondata.pipe';

@NgModule({
  declarations: [ShowNullResultPipe, PytFilterPipe, JsondataPipe],
  imports: [CommonModule],
  exports: [ShowNullResultPipe, PytFilterPipe],
  providers: [],
})
export class PipesModule {}
