import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGuardComponent } from './list-guard.component';

describe('ListGuardComponent', () => {
  let component: ListGuardComponent;
  let fixture: ComponentFixture<ListGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGuardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
