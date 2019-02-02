import { ProductOfSubcategory } from './productsOfSubcategoryResponse.model';

export class SubcategoryProducts{
    subcategory: String;
    subcategoryProducts: Array<ProductOfSubcategory> = [];
}