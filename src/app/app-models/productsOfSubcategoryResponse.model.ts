export class ProductOfSubcategory{
        id: number;
        created_at: Date;
        updated_at: Date;
        Orientation: String;
        buildOn: String;
        price: String;
        artistId: number;
        subCategoryId: number
        image: String;
        availability: String;
        Name: String;
        isVerified: Boolean;
        user: {
            id: number;
            created_at: Date;
            updated_at: Date;
            email: Date;
            userType: String;
            fullName: String;
            Phone: String;
            isVerified: Boolean;
        }
    

}
