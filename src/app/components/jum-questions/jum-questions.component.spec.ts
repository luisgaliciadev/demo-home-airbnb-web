import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumQuestionsComponent } from './jum-questions.component';

describe('JumQuestionsComponent', () => {
  let component: JumQuestionsComponent;
  let fixture: ComponentFixture<JumQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
