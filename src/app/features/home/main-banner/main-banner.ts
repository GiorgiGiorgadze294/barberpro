import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  standalone: false,
  templateUrl: './main-banner.html',
  styleUrl: './main-banner.css',
})
export class MainBanner implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}