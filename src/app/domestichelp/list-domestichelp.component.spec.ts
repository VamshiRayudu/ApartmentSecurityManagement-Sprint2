import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDomestichelpComponent } from './list-domestichelp.component';

describe('ListDomestichelpComponent', () => {
  let component: ListDomestichelpComponent;
  let fixture: ComponentFixture<ListDomestichelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDomestichelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDomestichelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
