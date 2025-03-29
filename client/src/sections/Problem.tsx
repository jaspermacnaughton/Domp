import { MathJax } from "better-react-mathjax";
import { useEffect, useState } from "react";


export default function Problem() {
  const [title, setTitle] = useState<string>("");
  const [problem, setProblem] = useState<string>("");
  
  const fetchProblem = async () => {
    setProblem("");
    
    const response = await fetch("http://localhost:8080/api/problem");
    if (!response.ok) {
      console.error(`Failed to fetch problem: ${response.statusText}`);
      return;
    }
    
    const data = await response.json();
    setTitle(data.title);
    setProblem(data.problem);
  }

  useEffect(() => {
    fetchProblem();
  }, []);
  
  return (
    <>
      <h3 className="text-2xl pb-2 font-bold">Problem</h3>
      <h4 className="text-xl pb-2">{title}</h4>
      <MathJax className="text-1xl">{problem}</MathJax>
    </>
  );
}