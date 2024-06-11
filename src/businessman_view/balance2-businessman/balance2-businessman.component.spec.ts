import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Balance2BusinessmanComponent } from './balance2-businessman.component';

describe('Balance2BusinessmanComponent', () => {
  let component: Balance2BusinessmanComponent;
  let fixture: ComponentFixture<Balance2BusinessmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Balance2BusinessmanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Balance2BusinessmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
