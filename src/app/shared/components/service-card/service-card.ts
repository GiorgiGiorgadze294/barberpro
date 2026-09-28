import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BarberService } from '../../../core/models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: false,
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {
  @Input() service!: BarberService;
  @Output() selectService = new EventEmitter<BarberService>();

  onBook(): void {
    this.selectService.emit(this.service);
  }
}