import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@directives-components/button/button.module';
import { FocusSwipeMobileModule } from '@directives/focus-swipe-mobile.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ButtonModule, FocusSwipeMobileModule],
  exports: [HomeComponent],
})
export class HomeModule {}
