import { NgModule } from '@angular/core';
import { HomeModule } from './../pages/home/home.module';

const baseModule = [HomeModule];

@NgModule({
  imports: [...baseModule],
  exports: [...baseModule],
})
export class SharedModule {}
