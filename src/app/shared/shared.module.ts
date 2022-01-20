import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavBarComponent
  ],
})
export class SharedModule { }
