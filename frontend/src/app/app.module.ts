import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UserdetailerComponent } from './userdetailer/userdetailer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    UserdetailerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
