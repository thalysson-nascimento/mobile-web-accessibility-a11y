import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@directives-components/button/button.module';
import { FocusSwipeMobileModule } from '@directives/focus-swipe-mobile.module';
import { FocusTrapSwipeScreenMobileModule } from '@directives/focus-trap-swipe-screen-mobile/focus-trap-swipe-screen-mobile.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FocusSwipeMobileModule,
    FocusTrapSwipeScreenMobileModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
