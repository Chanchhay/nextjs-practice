import ProductDetail from "@/src/components/product/ProductDetail";
import { Product } from "@/src/lib/product/product-type";

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const API = process.env.NEXT_PUBLIC_URL;
    const { id } = await params;
    console.log(id);
    const data = await fetch(`${API}/products/${id}`);

    const product: Product = await data.json();
    return (
        <div>
            <ProductDetail product={product} />
        </div>
    );
}
