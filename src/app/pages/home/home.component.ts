import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { WhatWeDoComponent } from '../../components/what-we-do/what-we-do.component';
import { WhatCanDoComponent } from '../../components/what-can-do/what-can-do.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { BrandsComponent } from '../../components/brands/brands.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, WhatWeDoComponent, WhatCanDoComponent, AboutUsComponent, BrandsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
