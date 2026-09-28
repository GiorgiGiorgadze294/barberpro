import { Component, HostListener, OnInit } from '@angular/core';
import { BusinessDataService } from '../../../core/services/business-data.service';
import { BusinessConfig } from '../../../core/models/business.model';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  businessInfo!: BusinessConfig;
  isScrolled: boolean = false;
  isMobileMenuOpen: boolean = false;

  constructor(private businessDataService: BusinessDataService) {}

  ngOnInit(): void {
    this.businessInfo = this.businessDataService.getBusinessInfo();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
