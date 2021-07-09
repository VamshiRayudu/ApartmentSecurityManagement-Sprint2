import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardHomepageComponent } from './guard-homepage.component';

describe('GuardHomepageComponent', () => {
  let component: GuardHomepageComponent;
  let fixture: ComponentFixture<GuardHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
