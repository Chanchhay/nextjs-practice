import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
    /* config options here */

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
                // port: "",
                // pathname: "/account123/**",
            },
        ],
    },
};

export default withFlowbiteReact(nextConfig);