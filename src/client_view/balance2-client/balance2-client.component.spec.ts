import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Balance2ClientComponent } from './balance2-client.component';

describe('Balance2ClientComponent', () => {
  let component: Balance2ClientComponent;
  let fixture: ComponentFixture<Balance2ClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Balance2ClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Balance2ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
