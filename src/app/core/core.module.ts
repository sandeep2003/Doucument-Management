import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreDirectivesModule } from './directives/core-directives.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreDirectivesModule, PipesModule],
  exports: [CoreDirectivesModule, PipesModule],
})
export class CoreModule {}
