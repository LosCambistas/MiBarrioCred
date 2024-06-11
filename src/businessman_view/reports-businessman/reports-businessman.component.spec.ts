import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsBusinessmanComponent } from './reports-businessman.component';

describe('ReportsBusinessmanComponent', () => {
  let component: ReportsBusinessmanComponent;
  let fixture: ComponentFixture<ReportsBusinessmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportsBusinessmanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportsBusinessmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
