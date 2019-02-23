import { LocalStorageDataModel } from './localStorageData.model';

export class PaymentModel{
    address_line_1: String;
    address_line_2: String;
    country: String;
    city: String;
    province: String;
    postal_code: String;
    alt_address: String;
    alt_phone: String;
    buyer_id: String;
    totalPrice: number;
    products: Array<LocalStorageDataModel> = [];
}