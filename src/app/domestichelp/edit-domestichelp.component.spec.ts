import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDomestichelpComponent } from './edit-domestichelp.component';

describe('EditDomestichelpComponent', () => {
  let component: EditDomestichelpComponent;
  let fixture: ComponentFixture<EditDomestichelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDomestichelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDomestichelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
