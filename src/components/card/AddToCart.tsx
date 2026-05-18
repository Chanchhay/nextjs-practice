"use client";

import { useState } from "react";

export default function AddToCard() {
    const [num, setNum] = useState(0);
    return (
        <div>
            <h1 className="text-7xl">Card now have: {num}</h1>
            <button
                className="w-2xl h-36 border-4 text-4xl"
                onClick={() => {
                    setNum(num + 1);
                }}
            >
                + 1
            </button>

            <ChildrenA num={num} />
        </div>
    );
}

export function ChildrenA({ num }: { num: number }) {
    return (
        <div>
            <h1 className="text-7xl">ChildrenA state pass: {num}</h1>
        </div>
    );
}


export function ChildrenB(){
    return (
        <div>
            <h1>update lift state: {}</h1>
        </div>
    )
}
