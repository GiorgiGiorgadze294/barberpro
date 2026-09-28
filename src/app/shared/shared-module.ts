import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { ServiceCard } from './components/service-card/service-card';
import { SectionTitle } from './components/section-title/section-title';

@NgModule({
  declarations: [Navbar, Footer, ServiceCard, SectionTitle],
  imports: [CommonModule],
  exports: [
    CommonModule,
    SectionTitle,
    ServiceCard
  ]
})
export class SharedModule {}
