import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumTravelsComponent } from './jum-travels.component';

describe('JumTravelsComponent', () => {
  let component: JumTravelsComponent;
  let fixture: ComponentFixture<JumTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumTravelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
