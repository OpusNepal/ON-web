export interface DeliveryModel {
 
    alt_address: string,
    alt_phone: string,
    default_address: string,
    id: Number,
    isDelivered: boolean,
    totalPrice:string
    delivery_products:Array<Products>
}

interface Products{
    quantity:Number,
    Product:Product
}

interface Product{
    Orientation:string,
    buildOn: string,
    price: string,
    image: string,
    availability: string,
    Name: string,
}