import { useState, useEffect, useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../Data/QuestionsData";

const Quiz = () => {
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [selectChoices, setSelectChoices] = useState("");

  const { score, setScore,setAppState } = useContext(DataContext);

  useEffect(() => {
    checkAnswer()
    // eslint-disable-next-line
  }, [selectChoices])

  const checkAnswer = () => {
    if (selectChoices !== "") {
      if (selectChoices === QuestionsData[currentQuestions].answer) {
        setScore(score + 1)
        nextQuestions()
      }
      else {
        //console.log("ตอบผิด");
        nextQuestions()
      }
    }
  }

  const nextQuestions = () => {
    setSelectChoices("")
    if(currentQuestions === QuestionsData.length-1){
      setAppState("score")
    }
    setCurrentQuestions(currentQuestions + 1)
  }

  return (
    <div className="quiz">
      <h1>{QuestionsData[currentQuestions].question}</h1>
      <div className="choices">
        <button onClick={() => setSelectChoices("A")}>{QuestionsData[currentQuestions].A}</button>
        <button onClick={() => setSelectChoices("B")}>{QuestionsData[currentQuestions].B}</button>
        <button onClick={() => setSelectChoices("C")}>{QuestionsData[currentQuestions].C}</button>
        <button onClick={() => setSelectChoices("D")}>{QuestionsData[currentQuestions].D}</button>
      </div>
      <p>{`${currentQuestions + 1}/${QuestionsData.length}`}</p>
    </div>
  );
};

export default Quiz;
