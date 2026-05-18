import Blog from "@/src/components/blog/BlogComponent";
import { blogType } from "@/src/lib/blog/blog-type";

const blogs: blogType[] = [
    {
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
        title: "Paris",
        subtitle: "Exploring the City of Light",
    },
    {
        image: "https://imgs.search.brave.com/EOFa_Lf9u34zT2qWRSpIw09wCKgoJk6RZfWF9oYTQuQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YXNpYW9keXNzZXl0/cmF2ZWwuY29tL2lt/YWdlcy9hc2lhLXRv/dXJzL2phcGFuLXRv/dXJzL3RlbnJ5dWpp/LXRlbXBsZS03MDAt/Mi5qcGc",
        title: "Kyoto",
        subtitle: "Temples and Tranquility",
    },
    {
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
        title: "New York",
        subtitle: "The Concrete Jungle",
    },
    {
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        title: "Swiss Alps",
        subtitle: "A Hiker's Paradise",
    },
    {
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
        title: "Santorini",
        subtitle: "Stunning Sunset Views",
    },
    {
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
        title: "Bali",
        subtitle: "Your Tropical Escape",
    },
    {
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
        title: "Rome",
        subtitle: "Walking Through Ancient History",
    },
    {
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
        title: "Cape Town",
        subtitle: "Coastal Beauty and Mountains",
    },
];

export default function Page() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
                {blogs.map((blog, index) => (
                    <div key={index} className="w-full max-w-sm">
                        <Blog
                            image={blog.image}
                            title={blog.title}
                            subtitle={blog.subtitle}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
