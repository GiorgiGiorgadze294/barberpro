import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements OnInit {
  galleryImages = [
    { url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600', alt: 'Haircut Style 1' },
    { url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=600', alt: 'Beard Trim' },
    { url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600', alt: 'Hair Styling' },
    { url: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=600', alt: 'Shaving Service' },
    { url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=600', alt: 'Barber Shop Vibe' },
    { url: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600', alt: 'Classic Cut' }
  ];

  constructor() { }

  ngOnInit(): void { }
}