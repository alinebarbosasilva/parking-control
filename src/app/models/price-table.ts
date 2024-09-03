export interface ParkingRegistration {
    id: string;
    checkInDate: string;
    checkOutDate: string;
    plate: string;
    durationInSeconds: number;
    price: number;
    priceToPay: number;

}
