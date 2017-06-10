import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LofaszComponent } from './lofasz/lofasz.component';

import { MovieService } from './home/movie.service';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import 'hammerjs';
 

const appRoutes: Routes = [
  {
    path: 'lofasz',
    component: LofaszComponent,
  },{
    path: 'home',
    component: HomeComponent,
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


  @NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      PageNotFoundComponent,
      LofaszComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      FlexLayoutModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      JsonpModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [ MovieService ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }