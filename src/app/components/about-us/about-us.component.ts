import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Member {
  name: string;
  description: string;
  role: string;
  image: string;
}
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  listMembers: Member[] = [
    {
      name: 'Newton Fleury',
      description: '',
      role: 'CEO & Founder',
      image: '../../assets/members/newton.svg'
    },
    {
      name: 'Ana Pardini',
      description: '',
      role: 'Project Manager',
      image: '../../assets/members/aninha.svg'
    },
    {
      name: 'Artur Pompilio',
      description: '',
      role: 'Discord Specialist',
      image: '../../assets/members/dune.svg'
    },
    {
      name: 'Robert  Resende',
      description: '',
      role: 'CTO & Developer',
      image: '../../assets/members/robert.svg'
    },
    {
      name: 'Jainy Gomes',
      description: '',
      role: 'UX/UI',
      image: '../../assets/members/jainy.svg'
    },
    {
      name: 'Eduardo Rodrigues',
      description: '',
      role: 'Developer',
      image: '../../assets/members/eduardo.svg'
    },
    {
      name: 'Rebeca Franca',
      description: '',
      role: 'Community Manager',
      image: '../../assets/members/rebeca.svg'
    },
    {
      name: 'Jordana Pereira',
      description: '',
      role: 'Community Manager',
      image: '../../assets/members/jojo.svg'
    },
  ];

  constructor() {}
}
