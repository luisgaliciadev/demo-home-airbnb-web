import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarResComponent } from './nav-bar-res.component';

describe('NavBarResComponent', () => {
  let component: NavBarResComponent;
  let fixture: ComponentFixture<NavBarResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
