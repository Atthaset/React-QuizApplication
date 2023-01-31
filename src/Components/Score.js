import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../Data/QuestionsData";

const Score = () => {

    const { score, setAppState, setScore } = useContext(DataContext);

    const Restartapp=()=>{
        setScore(0)
        setAppState("menu")
    }

    return (
        <div className="score">
            <h1>Your Score</h1>
            <h2>{score}/{QuestionsData.length}</h2>
            <button onClick={Restartapp}>Retry</button>
        </div>
    );
};

export default Score;
