import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBusinessmanComponent } from './menu-businessman.component';

describe('MenuBusinessmanComponent', () => {
  let component: MenuBusinessmanComponent;
  let fixture: ComponentFixture<MenuBusinessmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuBusinessmanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBusinessmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
