export interface WishlistProduct {
    id: Number,
    created_at: string,
    updated_at: string,
    productId: Number,
    userId: Number,
    products: {
        id: string,
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
