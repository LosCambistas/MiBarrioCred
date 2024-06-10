import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceBusinessmanComponent } from './balance-businessman.component';

describe('BalanceBusinessmanComponent', () => {
  let component: BalanceBusinessmanComponent;
  let fixture: ComponentFixture<BalanceBusinessmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalanceBusinessmanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalanceBusinessmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
