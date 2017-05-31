import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LofaszComponent } from './lofasz/lofasz.component';
 

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
      FormsModule,
      HttpModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }