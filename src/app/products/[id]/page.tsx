import ProductDetail from "@/src/components/product/ProductDetail";
import { getProductById } from "@/src/lib/fetchProduct/fetch-product";

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = await getProductById(id);
    console.log(product);

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    );
}
