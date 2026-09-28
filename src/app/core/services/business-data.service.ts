import { Injectable } from '@angular/core';
import { BUSINESS_CONFIG } from '../constants/business.config';
import { BarberService } from '../models/service.model';
import { Barber } from '../models/barber.model';
import { BusinessConfig } from '../models/business.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessDataService {

  private servicesList: BarberService[] = [
    {
      id: 'haircut',
      name: 'თმის შეჭრა & სტილი',
      description: 'კლასიკური ან თანამედროვე ვარცხნილობა, თავის დაბანა და სტილიზაცია premium პროდუქციით.',
      price: 25,
      durationMinutes: 45,
      image: 'assets/images/services/haircut.jpg',
      category: 'hair'
    },
    {
      id: 'beard',
      name: 'წვერის მოწესრიგება',
      description: 'წვერის ფორმირება, ცხელი პირსახოცის კომპრესი და პარსვა სამართებლით.',
      price: 15,
      durationMinutes: 30,
      image: 'assets/images/services/beard.jpg',
      category: 'beard'
    },
    {
      id: 'combo',
      name: 'თმა + წვერი Combo',
      description: 'სრული ტრანსფორმაცია — თმის შეჭრა, სტილიზაცია და წვერის სრული მოვლა.',
      price: 35,
      durationMinutes: 75,
      image: 'assets/images/services/combo.jpg',
      category: 'combo'
    },
    {
      id: 'royal-care',
      name: 'Royal VIP მოვლა',
      description: 'თმა + წვერი + სახის კანის გამწმენდი ნიღაბი და თავის მასაჟი.',
      price: 50,
      durationMinutes: 90,
      image: 'assets/images/services/vip.jpg',
      category: 'vip'
    }
  ];

  private barbersList: Barber[] = [
    {
      id: 'JAKE',
      name: 'JAKE',
      role: 'Master Barber',
      experienceYears: 7,
      image: 'https://i.pinimg.com/1200x/15/57/7d/15577d3abe871f3370836d0e2e63e6bd.jpg',
      bio: 'კლასიკური შეჭრისა და სამართებლით პარსვის სპეციალისტი.'
    },
    {
      id: 'ENRIQUE',
      name: 'ENRIQUE',
      role: 'Top Barber',
      experienceYears: 5,
      image: 'https://i.pinimg.com/1200x/b1/29/ec/b129ec641553fc8b8d83a9432d2c3ae8.jpg',
      bio: 'თანამედროვე Fade ტექნიკებისა და სტილიზაციის ექსპერტი.'
    },
    {
      id: 'ANDREW',
      name: 'ANDREW',
      role: 'Master Barber',
      experienceYears: 3,
      image: 'https://i.pinimg.com/1200x/a8/1e/15/a81e15ba7936ed26d96e2657e1cc2963.jpg',
      bio: 'კლასიკური შეჭრისა და სამართებლით პარსვის სპეციალისტი.'
    },
    
  ];

  getBusinessInfo(): BusinessConfig {
    return BUSINESS_CONFIG;
  }

  getServices(): BarberService[] {
    return this.servicesList;
  }

  getBarbers(): Barber[] {
    return this.barbersList;
  }
}