interface DeliveryProduct {
    id: Number,
    created_at: string,
    updated_at: string,
    transactionId: Number,
    productId: Number,
    quantity: Number,
    products: {
        id: Number,
        created_at: string,
        updated_at: string,
        Orientation: string,
        buildOn: string,
        price: string,
        artistId: Number,
        subCategoryId: Number,
        image: string,
        availability: boolean,
        Name: string,
        isVerified: boolean
    }

}

interface Buyer {
    id: Number,
    created_at: string,
    updated_at: string,
    email: string,
    userType: string,
    fullName: string,
    Phone: string,
    isVerified: boolean
}

export interface AdminDeliveryResponse {
    id: Number,
    created_at: string,
    updated_at: string,
    transactionId: string,
    buyer_id: Number,
    default_address: string,
    alt_address: string,
    totalPrice:string,
    alt_phone: string,
    isDelivered: boolean,
    delivery_products: DeliveryProduct[],
    buyer: Buyer
}