import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageGuardComponent } from './homepage-guard.component';

describe('HomepageGuardComponent', () => {
  let component: HomepageGuardComponent;
  let fixture: ComponentFixture<HomepageGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageGuardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
