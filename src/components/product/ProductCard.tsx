import { Product } from "@/src/lib/product/product-type";
import Image from "next/image";

export default function ProductCard({ props }: { props: Product }) {
    const product = props;
    console.log(product)
    return (
        <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
            <div className="relative">
                <Image
                    className="w-full"
                    src={product.image}
                    alt="Product Image"
                    width={400}
                    height={400}
                />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                    SALE
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">Product Title</h3>
                <p className="text-gray-600 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis vitae ante vel eros fermentum faucibus sit amet euismod
                    lorem.
                </p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">$19.99</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
