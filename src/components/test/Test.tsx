"use client";
import { Button } from "@/components/ui/button";
// import { useState } from "react";

import { useState } from "react";

// export default function TestBtn() {
//     const arrSize: string[] = ["sm", "md", "lg", "xl"];
//     const [size, setSize] = useState<string>();

//     return (
//         <div>
//             <h1 className="text-7xl">Size: {size}</h1>
//             <button onClick={() => setSize(arrSize[0])}>Small size</button>
//             <button onClick={() => setSize(arrSize[1])}>middle size</button>
//         </div>)

//             {/* <button onSelect={() => setSize(arrSize[0])}></button> */}

//             <br />

//             {/* <select name="sel" id="1">
//                 <option value="middle" onSelect={() => setSize(arrSize[0])}>
//                     md
//                 </option>
//                 <option value="sm" onSelect={() => setSize(arrSize[1])}>
//                     sm
//                 </option>
//                 <option value="lg" onSelect={() => setSize(arrSize[2])}>
//                     lg
//                 </option>
//                 <option value="xl" onSelect={() => setSize(arrSize[3])}>
//                     xl
//                 </option>
//             </select> */}
//         </div>
//     );
// }

// export default function Test() {
//     const [size, setSize] = useState<string[]>([]);
//     return (
//         <>
//         <h1>size is: {size}</h1>
//             {["sm", "md", "lg"].map((s, index) => (
//                 <div key={index}>
//                     <button onSelect={(s) => setSize(s)}></button>
//                 </div>
//             ))}
//         </>
//     );
// }

export default function TestBtn() {
    const arrSize: string[] = ["sm", "md", "lg", "xl"];
    const [size, setSize] = useState<string>();

    return (
        <div>
            <h1 className="text-7xl">Size: {size}</h1>
            <Button variant={"destructive"} onClick={() => setSize(arrSize[0])}>Small size</Button>
            <Button variant={"destructive"} onClick={() => setSize(arrSize[1])}>middle size</Button>
        </div>
    );
}
