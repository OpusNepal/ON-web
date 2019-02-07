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

interface Category {
    id: Number,
    created_at: String,
    updated_at: String,
    Category: String
}

interface Subcategory {
    id: Number,
    created_at: String,
    updated_at: String,
    subCategory: String,
    categoryId: Number,
    category: Category
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
    user: User,
    subCategory: Subcategory
}

export const mockProducts = [
    {
        "id": 1,
        "created_at": "2019-01-30T03:49:49.376Z",
        "updated_at": "2019-01-30T03:49:49.769Z",
        "Orientation": "street",
        "buildOn": "murals",
        "price": "valie",
        "artistId": 2,
        "subCategoryId": 1,
        "image": "public/uploads/products/1548820189304agriculture-apple-blur-257840.jpg",
        "availability": "Yes",
        "Name": "The Beginning",
        "isVerified": false,
        "user": {
            "id": 2,
            "created_at": "2019-01-18T03:19:45.038Z",
            "updated_at": "2019-02-01T03:49:27.497Z",
            "email": "yudeep1@gmail.com",
            "userType": "artist",
            "fullName": "yudeep",
            "Phone": "1234",
            "isVerified": true
        },
        "subCategory": {
            "id": 1,
            "created_at": "2019-01-30T03:43:38.451Z",
            "updated_at": "2019-01-30T03:43:38.449Z",
            "subCategory": "Oil",
            "categoryId": 1,
            "category": {
                "id": 1,
                "created_at": "2019-01-30T03:43:38.424Z",
                "updated_at": "2019-01-30T03:43:38.421Z",
                "Category": "Paintings"
            }
        }
    },
    {
        "id": 2,
        "created_at": "2019-01-30T03:50:02.349Z",
        "updated_at": "2019-01-30T03:50:02.385Z",
        "Orientation": "street",
        "buildOn": "murals",
        "price": "valie",
        "artistId": 2,
        "subCategoryId": 2,
        "image": "public/uploads/products/1548820202271agriculture-apple-blur-257840.jpg",
        "availability": "Yes",
        "Name": "The End",
        "isVerified": false,
        "user": {
            "id": 2,
            "created_at": "2019-01-18T03:19:45.038Z",
            "updated_at": "2019-02-01T03:49:27.497Z",
            "email": "yudeep1@gmail.com",
            "userType": "artist",
            "fullName": "yudeep",
            "Phone": "1234",
            "isVerified": true
        },
        "subCategory": {
            "id": 2,
            "created_at": "2019-01-30T03:43:38.451Z",
            "updated_at": "2019-01-30T03:43:38.449Z",
            "subCategory": "Water",
            "categoryId": 1,
            "category": {
                "id": 1,
                "created_at": "2019-01-30T03:43:38.424Z",
                "updated_at": "2019-01-30T03:43:38.421Z",
                "Category": "Paintings"
            }
        }
    },
    {
        "id": 3,
        "created_at": "2019-01-30T03:50:10.264Z",
        "updated_at": "2019-01-30T03:50:10.324Z",
        "Orientation": "street",
        "buildOn": "murals",
        "price": "valie",
        "artistId": 2,
        "subCategoryId": 3,
        "image": "public/uploads/products/1548820210205agriculture-apple-blur-257840.jpg",
        "availability": "Yes",
        "Name": "Next image",
        "isVerified": false,
        "user": {
            "id": 2,
            "created_at": "2019-01-18T03:19:45.038Z",
            "updated_at": "2019-02-01T03:49:27.497Z",
            "email": "yudeep1@gmail.com",
            "userType": "artist",
            "fullName": "yudeep",
            "Phone": "1234",
            "isVerified": true
        },
        "subCategory": {
            "id": 3,
            "created_at": "2019-01-30T03:43:38.451Z",
            "updated_at": "2019-01-30T03:43:38.449Z",
            "subCategory": "Acrylic",
            "categoryId": 1,
            "category": {
                "id": 1,
                "created_at": "2019-01-30T03:43:38.424Z",
                "updated_at": "2019-01-30T03:43:38.421Z",
                "Category": "Paintings"
            }
        }
    },
    {
        "id": 4,
        "created_at": "2019-01-30T03:50:26.507Z",
        "updated_at": "2019-01-30T03:50:26.558Z",
        "Orientation": "street",
        "buildOn": "murals",
        "price": "valie",
        "artistId": 2,
        "subCategoryId": 4,
        "image": "public/uploads/products/154882022650547810_computer_windows_95.jpg",
        "availability": "Yes",
        "Name": "Windows",
        "isVerified": false,
        "user": {
            "id": 2,
            "created_at": "2019-01-18T03:19:45.038Z",
            "updated_at": "2019-02-01T03:49:27.497Z",
            "email": "yudeep1@gmail.com",
            "userType": "artist",
            "fullName": "yudeep",
            "Phone": "1234",
            "isVerified": true
        },
        "subCategory": {
            "id": 4,
            "created_at": "2019-01-30T03:43:38.451Z",
            "updated_at": "2019-01-30T03:43:38.449Z",
            "subCategory": "Pastel Colour",
            "categoryId": 1,
            "category": {
                "id": 1,
                "created_at": "2019-01-30T03:43:38.424Z",
                "updated_at": "2019-01-30T03:43:38.421Z",
                "Category": "Paintings"
            }
        }
    },
    {
        "id": 5,
        "created_at": "2019-01-30T03:50:39.205Z",
        "updated_at": "2019-01-30T03:50:39.685Z",
        "Orientation": "street",
        "buildOn": "murals",
        "price": "valie",
        "artistId": 2,
        "subCategoryId": 5,
        "image": "public/uploads/products/154882023878147810_computer_windows_95.jpg",
        "availability": "Yes",
        "Name": "Finals",
        "isVerified": false,
        "user": {
            "id": 2,
            "created_at": "2019-01-18T03:19:45.038Z",
            "updated_at": "2019-02-01T03:49:27.497Z",
            "email": "yudeep1@gmail.com",
            "userType": "artist",
            "fullName": "yudeep",
            "Phone": "1234",
            "isVerified": true
        },
        "subCategory": {
            "id": 5,
            "created_at": "2019-01-30T03:43:38.451Z",
            "updated_at": "2019-01-30T03:43:38.449Z",
            "subCategory": "Fresco",
            "categoryId": 1,
            "category": {
                "id": 1,
                "created_at": "2019-01-30T03:43:38.424Z",
                "updated_at": "2019-01-30T03:43:38.421Z",
                "Category": "Paintings"
            }
        }
    }
];