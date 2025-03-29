import { useState } from "react";


export default function UserSteps() {
  const [userSteps, setUserSteps] = useState<string[]>([]);
  
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
    <div className="py-4 flex flex-col items-center">
      <h3 className="text-2xl pb-2 font-bold">Steps</h3>
      <div className="flex flex-col items-center gap-2 w-full md:w-auto">
        {getUserStepsWithEmpty().map((_, index) => (
          <div key={`step-${index}-container`} className="flex flex-row gap-2 items-center w-full md:w-lg">
            <p key={`step-${index}-number`} className="w-6">{index + 1}.</p>
            <input 
              key={`step-${index}-input`}
              className="border border-gray-300  bg-gray-50 rounded-sm pl-2 p-1 w-full md:w-lg" 
              onBlur={(e) => onUpdateStep(e.target.value, index)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}