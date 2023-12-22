import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatCanDoComponent } from './what-can-do.component';

describe('WhatCanDoComponent', () => {
  let component: WhatCanDoComponent;
  let fixture: ComponentFixture<WhatCanDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatCanDoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatCanDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
