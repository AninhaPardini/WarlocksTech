import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';

register();
@NgModule({
  declarations: [

  ],
  imports: [

    CommonModule, HomeComponent, BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
