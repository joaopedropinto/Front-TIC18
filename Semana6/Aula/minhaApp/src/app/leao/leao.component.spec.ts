import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaoComponent } from './leao.component';

describe('LeaoComponent', () => {
  let component: LeaoComponent;
  let fixture: ComponentFixture<LeaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
