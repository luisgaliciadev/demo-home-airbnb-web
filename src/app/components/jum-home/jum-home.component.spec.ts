import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumHomeComponent } from './jum-home.component';

describe('JumHomeComponent', () => {
  let component: JumHomeComponent;
  let fixture: ComponentFixture<JumHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
