import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { WhatCanDoComponent } from './components/what-can-do/what-can-do.component';
import { BrandsComponent } from './components/brands/brands.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'what-we-do', component: WhatWeDoComponent},
  { path: 'what-can-do', component: WhatCanDoComponent},
  { path: 'brands', component: BrandsComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
