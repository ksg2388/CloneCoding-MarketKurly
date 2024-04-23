export type Category = {
  id: number;
  name: string;
  icon: string;
};

export type Banner = {
  id: number;
  content: string;
};

export type Products = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type CartItem = {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
  isChecked: boolean;
};
