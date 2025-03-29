import { useState } from "react";


export default function Answer() {
  const [, setAnswer] = useState<string>("");
  
  return (
    <div className="py-4"> 
        <h3 className="text-2xl pb-2 font-bold">Answer</h3>
        <input
          className="border border-gray-300 rounded-md pl-2 p-1 w-full md:w-lg" 
          placeholder="Enter your answer"
          onBlur={(e) => setAnswer(e.target.value)}
        />
      </div>
  );
}