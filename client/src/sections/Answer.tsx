import { useState } from "react";
import { addStyles, EditableMathField, MathField } from "react-mathquill";

// Initialize MathQuill
addStyles();

export default function Answer() {
  const [latex, setLatex] = useState<string>("");

  const handleChange = (mathField: MathField) => {
    setLatex(mathField.latex());
  };

  return (
    <div className="py-4"> 
      <h3 className="text-2xl pb-2 font-bold">Answer</h3>
      <EditableMathField
      className="border border-gray-300 rounded-md pl-2 p-1 w-full md:w-lg"
        latex={latex}
        onChange={handleChange}
      />
    </div>
  );
}