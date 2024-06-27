import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionClientComponent } from './transaction-client.component';

describe('TransactionClientComponent', () => {
  let component: TransactionClientComponent;
  let fixture: ComponentFixture<TransactionClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
