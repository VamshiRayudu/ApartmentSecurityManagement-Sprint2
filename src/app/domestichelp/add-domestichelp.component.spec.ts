import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDomestichelpComponent } from './add-domestichelp.component';

describe('AddDomestichelpComponent', () => {
  let component: AddDomestichelpComponent;
  let fixture: ComponentFixture<AddDomestichelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDomestichelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDomestichelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
