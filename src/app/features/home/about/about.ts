import { Component, OnInit } from '@angular/core';
import { BusinessDataService } from '../../../core/services/business-data.service';
import { BusinessConfig } from '../../../core/models/business.model';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  businessInfo!: BusinessConfig;

  constructor(private businessDataService: BusinessDataService) {}

  ngOnInit(): void {
    this.businessInfo = this.businessDataService.getBusinessInfo();
  }
}