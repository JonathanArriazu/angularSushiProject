export interface SignUp {
   name: string;
   email: string;
   password: string;
}

export interface Login {
    email: string,
    password: string
 }

 export interface Product {
    name: string,
    price: number,
    category: string,
    description: string,
    image: string,
    id: number,
    popular: boolean,
    quantity: undefined | number
 }

 export interface UserCart {
   name: string,
    price: number,
    category: string,
    description: string,
    image: string,
    id: number | undefined,
    popular: boolean,
    quantity: undefined | number,
    userId: number,
    productId: number,
    actualDate: string
 }

 export interface AdminCart {
   name: string,
    price: number,
    category: string,
    description: string,
    image: string,
    id: number | undefined,
    popular: boolean,
    quantity: undefined | number,
    adminId: number,
    productId: number,
    actualDate: string
 }

 
 export interface UserOrders {
    asd: string,
    name: string,
    price: number,
    category: string,
    description: string,
    image: string,
    id: number,
    popular: boolean,
    quantity: undefined | number,
    userId: number,
    actualDate: string
   }
   export interface AdminOrders {
     name: string,
      price: number,
      category: string,
      description: string,
      image: string,
      id: number | undefined,
      popular: boolean,
      quantity: undefined | number,
      adminId: number,
      productId: number,
      actualDate: string
   }

   export interface Category {
      id: string;
      categoryName: string;
   }