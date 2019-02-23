export class PaymentModel{
    address_line_1: String;
    address_line_2: String;
    country: String;
    city: String;
    province: String;
    postal_code: String;
    alt_address: String;
    alt_phone: String;
    Buyer_id: String;
    totalPrice: String;
    products: Array<{id: number;
                    quantity: String}> = [];
}