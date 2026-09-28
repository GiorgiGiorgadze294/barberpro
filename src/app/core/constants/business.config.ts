import { BusinessConfig } from '../models/business.model';

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'BarberPro',
  tagline: 'PREMIUM GROOMING FOR GENTLEMEN',
  phone: '+995 599 12 34 56',
  whatsapp: '599396381', // უშუალოდ WhatsApp ბმულისთვის
  email: 'info@barberpro.ge',
  address: 'ჭავჭავაძის გამზირი 37',
  city: 'თბილისი',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tbilisi+Georgia',
  instagramUrl: 'https://instagram.com',
  facebookUrl: 'https://facebook.com',
  workingHours: [
    { day: 'ორშაბათი - პარასკევი', open: '10:00', close: '21:00', closed: false },
    { day: 'შაბათი', open: '10:00', close: '20:00', closed: false },
    { day: 'კვირა', open: '11:00', close: '18:00', closed: false }
  ]
};