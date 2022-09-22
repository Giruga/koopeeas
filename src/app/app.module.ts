import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent, PlayComponent, ScoresComponent } from '@components';

import { AppComponent } from './app.component';
import { StructuralModule } from './structure/structural.module';

import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [AppComponent, HomeComponent, ScoresComponent, PlayComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StructuralModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
