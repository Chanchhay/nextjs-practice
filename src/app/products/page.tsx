import ProductCard from "@/src/components/product/ProductCard";
import { getAllProducts } from "@/src/lib/fetchProduct/fetch-product";
import Link from "next/link";

export default async function Page() {
    const products = await getAllProducts();
    console.log(products)

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
