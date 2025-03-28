import './App.css'
import { useState, useEffect } from 'react'
import { MathJax, MathJaxContext } from 'better-react-mathjax'

function App() {
  const [problem, setProblem] = useState<string>('');
  
  const fetchProblem = async () => {
    console.log('Fetching problem...');
    const response = await fetch('http://localhost:8080/api/problem');
    const data = await response.json();
    setProblem(data.problem);
  }

  useEffect(() => {
    fetchProblem();
  }, []);

  return (
    <MathJaxContext>
      <h2 className="text-3xl">Daily Online Math Problem</h2>
      
      <MathJax className="text-1xl">{problem}</MathJax>
    </MathJaxContext>
  )
}

export default App
