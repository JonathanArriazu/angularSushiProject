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
    popular: boolean
 }