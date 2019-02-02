export class UserProductModel{
    Name: String;
    Orientation: String;
    artistId: number;
    availability: String;
    buildOn: Date;
    created_at: Date;
    id: number;
    image: String;
    isVerified: Boolean;
    price: String;
    subCategory:{
        categoryId: number;
        created_at: Date;
        id: number;
        subCategory: String;
        updated_at: Date;
    }
        subCategoryId: number;
        updated_at: Date;
    
    
}