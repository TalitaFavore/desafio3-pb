export interface Product {
    id: string; 
    name: string;
    shortDescription: string;
    description: string;
    discount: number;
    sale: boolean;
    new: boolean;
    stars: number;
    price: number;
    sku: string;
    category: string[];
    tags: string[]; 
    size: string[]; 
    color: string[]; 
    stock: number
    image: string;
  }
  