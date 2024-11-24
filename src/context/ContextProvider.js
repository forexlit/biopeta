import { useState } from "react";
import MyContext from "./MyContext";

const ContextProvider = ({ children }) => {
  const [finalScore, setFinalScore] = useState(null);
  const [finalAdultScore, setFinalAdultScore] = useState(null);

  const [answers, setAnswers] = useState([]);

  return (
    <MyContext.Provider
      value={{
        finalScore,
        setFinalScore,
        answers,
        setAnswers,
        finalAdultScore,
        setFinalAdultScore,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
