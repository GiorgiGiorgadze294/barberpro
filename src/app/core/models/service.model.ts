export interface BarberService {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  image: string;
  category?: 'hair' | 'beard' | 'combo' | 'vip';
}