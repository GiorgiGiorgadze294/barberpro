import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BusinessDataService } from '../../../core/services/business-data.service';
import { BusinessConfig } from '../../../core/models/business.model';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  info!: BusinessConfig;
  safeMapUrl!: SafeResourceUrl;

  // ფორმის ველები
  formData = {
    name: '',
    phone: '',
    message: ''
  };

  // WhatsApp-ის ნომერი (ქვეყნის კოდით, პლუსისა და ჰაერების გარეშე)
  whatsappNumber = '599396381'; // 👈 ჩაწერე შენი WhatsApp-ის ნომერი

  constructor(
    private businessDataService: BusinessDataService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.info = this.businessDataService.getBusinessInfo();

    const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.825228557342!2d44.7870!3d41.7151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzcalc0LjQiTiA0NMKwNDcnMTMuMiJF!5e0!3m2!1ska!2sge!4v1620000000000!5m2!1ska!2sge';
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(mapUrl);
  }

  sendMessage(): void {
    if (!this.formData.name || !this.formData.phone) {
      alert('გთხოვთ შეავსოთ სახელი და ტელეფონის ნომერი');
      return;
    }

    // შეტყობინების ტექსტის აწყობა
    const text = `გამარჯობა! 👋\n\n*ახალი შეტყობინება BarberPro-ს საიტიდან:*\n\n👤 *სახელი:* ${this.formData.name}\n📞 *ტელეფონი:* ${this.formData.phone}\n💬 *შეტყობინება:* ${this.formData.message || 'არ არის მითითებული'}`;

    // URL-ის დაფორმატება (Special characters -> URL encode)
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedText}`;

    // WhatsApp-ის გახსნა ახალ ჩანართში
    window.open(whatsappUrl, '_blank');
  }
}