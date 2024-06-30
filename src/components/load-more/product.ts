export interface IProductItem{  
    id: number;
    title: string;
    price: number;
    description: string
    category: ICategory
    images: string[]
}

export interface ICategory{
    id: number;
    name: string;
    image: string;
}