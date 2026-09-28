export interface BookingRequest {
  customerName: string;
  customerPhone: string;
  serviceId: string;
  barberId?: string;
  preferredDate: string;
  preferredTime: string;
  comment?: string;
}