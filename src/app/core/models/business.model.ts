export interface WorkingHour {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string; // ფორმატი: 9955XXXXXXXX
  email: string;
  address: string;
  city: string;
  mapsUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  workingHours: WorkingHour[];
}