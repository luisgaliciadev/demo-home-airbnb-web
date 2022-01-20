import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavBarScrollComponent } from './nav-bar-scroll/nav-bar-scroll.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    SearchBarComponent,
    NavBarScrollComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    NavBarScrollComponent
  ],
})
export class SharedModule { }
