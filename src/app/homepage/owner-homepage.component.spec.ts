import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerHomepageComponent } from './owner-homepage.component';

describe('OwnerHomepageComponent', () => {
  let component: OwnerHomepageComponent;
  let fixture: ComponentFixture<OwnerHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
