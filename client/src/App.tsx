import "./App.css"
import { useState, useEffect } from "react"
import { MathJax, MathJaxContext } from "better-react-mathjax"

function App() {
  const [title, setTitle] = useState<string>("");
  const [problem, setProblem] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  
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
    <MathJaxContext>
      <h2 className="text-3xl pb-4">Daily Online Math Problem</h2>
      
      <hr className="my-4" />
      
      <h3 className="text-2xl pb-2 font-bold">Problem</h3>
      <h4 className="text-xl pb-2">{title}</h4>
      <MathJax className="text-1xl">{problem}</MathJax>
      
      <hr className="my-4 mt-6" />
      
      <div className="py-4"> 
        <h3 className="text-2xl pb-2 font-bold">Answer</h3>
        <input
          className="border border-gray-300 rounded-md pl-2 p-1 w-full md:w-lg" 
          placeholder="Enter your answer"
          onBlur={(e) => setAnswer(e.target.value)}
        />
      </div>
    </MathJaxContext>
  )
}

export default App
