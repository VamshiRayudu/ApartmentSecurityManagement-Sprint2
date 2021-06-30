import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomestichelpComponent } from './domestichelp.component';

describe('DomestichelpComponent', () => {
  let component: DomestichelpComponent;
  let fixture: ComponentFixture<DomestichelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomestichelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomestichelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
