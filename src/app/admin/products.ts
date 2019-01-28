interface User {
    id: Number,
    created_at: String,
    updated_at: String,
    email: String,
    userType: String,
    fullName: String,
    Phone: String,
    isVerified: Boolean
}

export interface Product {
    id: Number,
    created_at: String,
    updated_at: String,
    Orientation: String,
    buildOn: String,
    price: String,
    artistId: Number,
    subCategoryId: Number,
    image: String,
    availability: String,
    Name: String,
    isVerified: Boolean,
    user: User
}

export const mockProducts = [
    {
        "id": 4,
        "created_at": "2019-01-23T15:11:26.145Z",
        "updated_at": "2019-01-23T15:11:26.145Z",
        "Orientation": "user",
        "buildOn": "now",
        "price": "now",
        "artistId": 38,
        "subCategoryId": 14,
        "image": 'public/uploads/profilepic/1547734519870simpsons-the-great-phatsby-1-920x584.jpg',
        "availability": "yes",
        "Name": "the beginning",
        "isVerified": false,
        "user": {
            "id": 38,
            "created_at": "2019-01-22T16:51:50.102Z",
            "updated_at": "2019-01-22T16:51:50.102Z",
            "email": "yudeepu33@gmail.com",
            "userType": "artist",
            "fullName": "Hot Cool",
            "Phone": "12345",
            "isVerified": false
        }
    },
    {
        "id": 6,
        "created_at": "2019-01-23T15:12:19.460Z",
        "updated_at": "2019-01-23T15:12:19.460Z",
        "Orientation": "user",
        "buildOn": "now",
        "price": "now",
        "artistId": 38,
        "subCategoryId": 14,
        "image": 'public/uploads/profilepic/test.jpg',
        "availability": "yes",
        "Name": "the beginning",
        "isVerified": false,
        "user": {
            "id": 38,
            "created_at": "2019-01-22T16:51:50.102Z",
            "updated_at": "2019-01-22T16:51:50.102Z",
            "email": "yudeepu33@gmail.com",
            "userType": "artist",
            "fullName": "rumit man ",
            "Phone": "12345",
            "isVerified": false
        }
    }
];


