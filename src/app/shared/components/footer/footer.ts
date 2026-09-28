import { Component, OnInit } from '@angular/core';
import { BusinessDataService } from '../../../core/services/business-data.service';
import { BusinessConfig } from '../../../core/models/business.model';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  businessInfo!: BusinessConfig;
  currentYear: number = new Date().getFullYear();

  constructor(private businessDataService: BusinessDataService) {}

  ngOnInit(): void {
    this.businessInfo = this.businessDataService.getBusinessInfo();
  }
}