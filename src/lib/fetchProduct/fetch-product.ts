import { Product } from "../product/product-type";

const API = process.env.NEXT_PUBLIC_URL;
export async function getAllProducts() {
    const data = await fetch(`${API}/products`);
    const products: Product[] = await data.json();
    console.log("products: ", products);

    return products;
}

export async function getProductById(id: string) {
    const data = await fetch(`${API}/products/${id}`);
    const product: Product = await data.json();
    console.log("single product: ", product);
    return product;
}
