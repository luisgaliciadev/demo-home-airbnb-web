import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumExperiencesComponent } from './jum-experiences.component';

describe('JumExperiencesComponent', () => {
  let component: JumExperiencesComponent;
  let fixture: ComponentFixture<JumExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumExperiencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
