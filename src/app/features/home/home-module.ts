import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared-module';
import { HomeRoutingModule } from './home-routing-module';

import { Home } from './home';
import { Hero } from './hero/hero';
import { Services } from './services/services';
import { About } from './about/about';
import { Team } from './team/team';
import { Gallery } from './gallery/gallery';
import { Reviews } from './reviews/reviews';
import { Booking } from './booking/booking';
import { Contact } from './contact/contact';
import { MainBanner } from './main-banner/main-banner';

@NgModule({
  declarations: [Home, Services, About, Team, Gallery, Reviews, Booking, Contact, MainBanner],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule, SharedModule, FormsModule],
})
export class HomeModule {}
