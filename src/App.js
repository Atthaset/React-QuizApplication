import { createContext, useState } from "react";
import Menu from "./Components/Menu";
import Quiz from "./Components/Quiz";
import Score from "./Components/Score";
import './App.css'

export const DataContext = createContext();

function App() {
  const [appState, setAppState] = useState("menu");
  const [score, setScore] = useState(0)

  return (
    <DataContext.Provider value={{ appState, setAppState ,score,setScore}}>
      <dive className="App">
        <h1>Web Development Quiz</h1>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </dive>
    </DataContext.Provider>
  );
}

export default App;
