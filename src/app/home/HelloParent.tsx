"use client";
import { useState } from "react";
import Hello1 from "./Hello1";
import Hello2 from "./Hello2";

export default function HelloParent() {
  const [isTrue, setIsTrue] = useState(true);

  return (
    <main  className="flex items-center justify-center flex-col">
      <Hello1 isTrue={isTrue} />
      <Hello2 isTrue={isTrue} />

      <div className="bg-gray-700 w-30 text-white rounded-xl  px-4 py-3 mx-1">
        <button onClick={() => setIsTrue(!isTrue)}>Toggle</button>
      </div>
    </main>
  );
}
