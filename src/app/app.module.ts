import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent, PlayComponent, ScoresComponent } from '@components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuralModule } from './structure/structural.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScoresComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StructuralModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
