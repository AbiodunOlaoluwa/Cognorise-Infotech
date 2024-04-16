import React from 'react';
import { useLocation } from 'react-router-dom';

const ScorePage = () => {

    const {state} = useLocation();

  return (
    <div>{state.score}</div>
  )
}

export default ScorePage