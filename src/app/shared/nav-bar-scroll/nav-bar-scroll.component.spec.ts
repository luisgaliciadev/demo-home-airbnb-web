import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarScrollComponent } from './nav-bar-scroll.component';

describe('NavBarScrollComponent', () => {
  let component: NavBarScrollComponent;
  let fixture: ComponentFixture<NavBarScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
