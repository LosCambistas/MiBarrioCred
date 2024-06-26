import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPaymentsBusinessmanComponent } from './register-payments-businessman.component';

describe('RegisterPaymentsBusinessmanComponent', () => {
  let component: RegisterPaymentsBusinessmanComponent;
  let fixture: ComponentFixture<RegisterPaymentsBusinessmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPaymentsBusinessmanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterPaymentsBusinessmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
