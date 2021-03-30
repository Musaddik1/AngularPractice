import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopandletComponent } from './scopandlet.component';

describe('ScopandletComponent', () => {
  let component: ScopandletComponent;
  let fixture: ComponentFixture<ScopandletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopandletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopandletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
