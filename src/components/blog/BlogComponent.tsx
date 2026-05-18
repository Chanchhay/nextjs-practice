import { blogType } from "@/src/lib/blog/blog-type";
import Image from "next/image";

export default function Blog({ image, title, subtitle }: blogType) {
    return (
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <Image
                src={image}
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
                width={400}
                height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">{title}</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                {subtitle}
            </div>
        </article>
    );
}
