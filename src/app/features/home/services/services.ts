import { Component, OnInit } from '@angular/core';
import { BusinessDataService } from '../../../core/services/business-data.service';
import { BarberService } from '../../../core/models/service.model';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  services: BarberService[] = [];

  constructor(private businessDataService: BusinessDataService) {}

  ngOnInit(): void {
    this.services = this.businessDataService.getServices();
  }

  onServiceSelect(service: BarberService): void {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}