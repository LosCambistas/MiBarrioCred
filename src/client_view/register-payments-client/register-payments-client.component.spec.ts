import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPaymentsClientComponent } from './register-payments-client.component';

describe('RegisterPaymentsClientComponent', () => {
  let component: RegisterPaymentsClientComponent;
  let fixture: ComponentFixture<RegisterPaymentsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPaymentsClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterPaymentsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
