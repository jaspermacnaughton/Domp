import "./App.css"
import { MathJaxContext } from "better-react-mathjax"
import UserSteps from "./sections/UserSteps";
import Problem from "./sections/Problem";
import Answer from "./sections/Answer";
export default function App() {

  return (
    <MathJaxContext>
      <h2 className="text-3xl pb-4">Daily Online Math Problem</h2>
      <hr className="my-4" />

      <Problem />
      <hr className="my-4 mt-6" />
      
      <UserSteps />
      <hr className="my-4 mt-6" />
      
      <Answer />
    </MathJaxContext>
  )
}
