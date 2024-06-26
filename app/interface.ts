export interface simplifiedProduct{
    _id: string;
    name: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
}

export interface fullProduct{
    _id: string;
    name: string;
    images: any;
    price: number;
    oldPrice:number
    slug: string;
    categoryName: string;
    description: string;
    price_id : string;
}