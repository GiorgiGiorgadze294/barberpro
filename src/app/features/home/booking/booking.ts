import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusinessDataService } from '../../../core/services/business-data.service';
import { BarberService } from '../../../core/models/service.model';
import { Barber } from '../../../core/models/barber.model';

@Component({
  selector: 'app-booking',
  standalone: false,
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking implements OnInit {
  bookingForm!: FormGroup;
  services: BarberService[] = [];
  barbers: Barber[] = [];

  constructor(
    private fb: FormBuilder,
    private businessDataService: BusinessDataService
  ) { }

  ngOnInit(): void {
    this.services = this.businessDataService.getServices();
    this.barbers = this.businessDataService.getBarbers();

    this.bookingForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9,12}$')]],
      serviceId: ['', Validators.required],
      barberId: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      const val = this.bookingForm.value;
      const selectedService = this.services.find(s => s.id === val.serviceId);
      const selectedBarber = this.barbers.find(b => b.id === val.barberId);

      const message = `გამარჯობა, მსურს ვიზიტის დაჯავშნა:
- **სახელი:** ${val.fullName}
- **ტელეფონი:** ${val.phone}
- **სერვისი:** ${selectedService?.name} (${selectedService?.price} ₾)
- **ბარბერი:** ${selectedBarber?.name}
- **თარიღი:** ${val.date}
- **დრო:** ${val.time}`;

      const whatsappNumber = '599396381'; // ჩაანაცვლე რეალური ნომრით
      const encodedMsg = encodeURIComponent(message);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, '_blank');
    } else {
      this.bookingForm.markAllAsTouched();
    }
  }
}