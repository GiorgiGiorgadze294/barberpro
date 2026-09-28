import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-section-title',
  standalone: false,
  templateUrl: './section-title.html',
  styleUrl: './section-title.css',
})
export class SectionTitle {
  @Input() subtitle: string = '';
  @Input() title: string = '';
  @Input() center: boolean = true;
}
