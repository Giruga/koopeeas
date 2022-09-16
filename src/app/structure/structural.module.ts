import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav'
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    AppRoutingModule,
  ],
  exports: [
    NavigationComponent
  ]
})
export class StructuralModule { }
