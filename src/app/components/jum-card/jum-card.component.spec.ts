import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumCardComponent } from './jum-card.component';

describe('JumCardComponent', () => {
  let component: JumCardComponent;
  let fixture: ComponentFixture<JumCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
