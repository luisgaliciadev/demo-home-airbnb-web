import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumHomeComponent } from './jum-home/jum-home.component';
import { JumCardComponent } from './jum-card/jum-card.component';
import { JumTravelsComponent } from './jum-travels/jum-travels.component';
import { JumExperiencesComponent } from './jum-experiences/jum-experiences.component';
import { JumQuestionsComponent } from './jum-questions/jum-questions.component';

@NgModule({
  declarations: [
    JumHomeComponent,
    JumCardComponent,
    JumTravelsComponent,
    JumExperiencesComponent,
    JumQuestionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JumHomeComponent,
    JumCardComponent,
    JumTravelsComponent,
    JumExperiencesComponent,
    JumQuestionsComponent
  ]
})
export class ComponentsModule { }
