import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav'
import { AppBaseComponent } from './app-base/app-base.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [AppBaseComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    AppRoutingModule,
  ],
  exports: [
    AppBaseComponent
  ]
})
export class StructuralModule { }
