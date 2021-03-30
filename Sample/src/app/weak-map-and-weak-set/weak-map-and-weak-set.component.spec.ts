import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeakMapAndWeakSetComponent } from './weak-map-and-weak-set.component';

describe('WeakMapAndWeakSetComponent', () => {
  let component: WeakMapAndWeakSetComponent;
  let fixture: ComponentFixture<WeakMapAndWeakSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeakMapAndWeakSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeakMapAndWeakSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
