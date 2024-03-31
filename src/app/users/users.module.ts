import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ConfigComponent } from './config/config.component';
import { SharedModule } from '@shared/shared.module';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  declarations: [ConfigComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule,
    //  CKEditorModule
    ],
})
export class UsersModule {}
