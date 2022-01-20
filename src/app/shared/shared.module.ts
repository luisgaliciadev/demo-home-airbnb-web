import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavBarScrollComponent } from './nav-bar-scroll/nav-bar-scroll.component';
import { NavBarResComponent } from './nav-bar-res/nav-bar-res.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    SearchBarComponent,
    NavBarScrollComponent,
    NavBarResComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    NavBarScrollComponent,
    NavBarResComponent
  ],
})
export class SharedModule { }
