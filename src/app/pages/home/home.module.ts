import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@directives-components/button/button.module';
import { ManagerFocusScreenMobileModule } from '@directives/manager-focus-screen-mobile/manager-focus-screen-mobile.module';
import { ListItemComponent } from 'src/app/shared/components/list-item/list-item.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, ListItemComponent],
  imports: [CommonModule, ButtonModule, ManagerFocusScreenMobileModule],
  exports: [HomeComponent, ListItemComponent],
})
export class HomeModule {}
