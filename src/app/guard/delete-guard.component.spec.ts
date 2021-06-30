import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGuardComponent } from './delete-guard.component';

describe('DeleteGuardComponent', () => {
  let component: DeleteGuardComponent;
  let fixture: ComponentFixture<DeleteGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGuardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
