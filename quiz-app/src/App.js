import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import './App.css';
import QuizPage from './Components/QuizPage';
import ScorePage from './Components/ScorePage';
import { useState } from 'react';

function App() {

  const [topic, setTopic] = useState(""); 

  return (
      <Routes>
        <Route path="/" element={<HomePage setTopic={setTopic} />} />;
        <Route path="/quizpage" element={<QuizPage topic={topic} />} />;
        <Route path="/scorePage" element={<ScorePage />} />;
      </Routes>
  );
}

export default App;
