import { Component, OnInit } from '@angular/core';
import { BusinessDataService } from '../../../core/services/business-data.service';
import { BusinessConfig } from '../../../core/models/business.model';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {
  businessInfo!: BusinessConfig;

  constructor(private businessDataService: BusinessDataService) {}

  ngOnInit(): void {
    this.businessInfo = this.businessDataService.getBusinessInfo();
  }
}