import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVoterComponent } from './login-voter.component';

describe('LoginVoterComponent', () => {
  let component: LoginVoterComponent;
  let fixture: ComponentFixture<LoginVoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginVoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
