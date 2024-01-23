import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { HeaderComponent } from '../../components/header/header.component';
import { WhatCanDoComponent } from '../../components/what-can-do/what-can-do.component';
import { WhatWeDoComponent } from '../../components/what-we-do/what-we-do.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { BrandsComponent } from '../../components/brands/brands.component';

import { BrowserModule } from '@angular/platform-browser';

import { register } from 'swiper/element/bundle';

register();

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AboutUsComponent,
    HeaderComponent,
    WhatCanDoComponent,
    WhatWeDoComponent,
    ContactComponent,
    BrandsComponent,
    BrowserModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
  ],
})
export class HomeModule { }
