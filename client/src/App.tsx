import "./App.css"
import { useState, useEffect } from "react"
import { MathJax, MathJaxContext } from "better-react-mathjax"

function App() {
  const [title, setTitle] = useState<string>("");
  const [problem, setProblem] = useState<string>("");
  const [userSteps, setUserSteps] = useState<string[]>([]);
  const [, setAnswer] = useState<string>("");
  
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
  
  const getUserStepsWithEmpty = () => [
    ...userSteps,
    ""
  ];

  const onUpdateStep = (step: string, index: number) => {
    if (index === userSteps.length && step === "") {
      // We always keep a blank step at the end via getUserStepsWithEmpty- 
      // only add a new step if the user has typed something
      return;
    }
    
    const newUserSteps = [...userSteps];
    newUserSteps[index] = step;
    setUserSteps(newUserSteps);
  }

  return (
    <MathJaxContext>
      <h2 className="text-3xl pb-4">Daily Online Math Problem</h2>
      
      <hr className="my-4" />
      
      <h3 className="text-2xl pb-2 font-bold">Problem</h3>
      <h4 className="text-xl pb-2">{title}</h4>
      <MathJax className="text-1xl">{problem}</MathJax>
      
      <hr className="my-4 mt-6" />
      
      <div className="py-4 flex flex-col items-center">
        <h3 className="text-2xl pb-2 font-bold">Steps</h3>
        <div className="flex flex-col items-center gap-2 w-full md:w-auto">
          {getUserStepsWithEmpty().map((step, index) => (
            <div key={`step-${index}-container`} className="flex flex-row gap-2 items-center w-full md:w-lg">
              <p key={`step-${index}-number`} className="w-6">{index + 1}.</p>
              <input 
                key={`step-${index}-input`}
                className="border border-gray-300 rounded-sm pl-2 p-1 w-full md:w-lg" 
                onBlur={(e) => onUpdateStep(e.target.value, index)} 
              />
            </div>
          ))}
        </div>
      </div>
      
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
