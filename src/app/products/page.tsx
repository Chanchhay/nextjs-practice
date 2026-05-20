import ProductCard from "@/src/components/product/ProductCard";
import { Product } from "@/src/lib/product/product-type";
import Link from "next/link";

export default async function Page() {
    const API = process.env.NEXT_PUBLIC_URL;
    const data = await fetch(`${API}/products`);

    if (!data.ok) return <h1>failed to get products</h1>;

    const products: Product[] = await data.json();

    return (
        <div className="grid grid-cols-4">
            {products.map((pro, index) => (
                <div key={index}>
                    <Link href={`products/${pro.id}`}>
                        <ProductCard props={pro} />
                    </Link>
                </div>
            ))}
        </div>
    );
}
