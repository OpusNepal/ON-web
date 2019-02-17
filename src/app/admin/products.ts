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

