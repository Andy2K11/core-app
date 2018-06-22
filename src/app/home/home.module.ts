import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule

  ],
  declarations: [WelcomeComponent]
})
export class HomeModule { }
