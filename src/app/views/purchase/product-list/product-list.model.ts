export interface ProductItem {
  id: number;
  img: string;
  name: string;
  type: ColorItem[];
  price: number;
  priceSale: number;
  description: string;
}

export interface ColorItem {
  id: number;
  name: string;
  isSelect: boolean;
}
