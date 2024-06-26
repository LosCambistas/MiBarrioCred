import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceClientComponent } from './balance-client.component';

describe('BalanceClientComponent', () => {
  let component: BalanceClientComponent;
  let fixture: ComponentFixture<BalanceClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalanceClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalanceClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
