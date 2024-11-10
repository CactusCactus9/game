import React from 'react';
import Local from './Local.js';
import FirstPage from './FirstPage.js';
import Tournament from './Tournament.js';
import OneVsOne from './OneVsOne.js';
import TwoVsTwo from './TwoVsTwo.js';
import FourVsFour from './FourVsFour.js';
import Restart from './Restart.js'
import Online from './Online.js';
import SingleLocal from './SingleLocal.js'

function Game() {
  return (
    <>
      <TwoVsTwo/>
    {/* <Online />
      <SingleLocal />
      <FourVsFour/>
      <OneVsOne/>
      <FirstPage/>
    <Restart/>
    <Tournament/> */}
    {/* <Local /> */}
    </>
  );
}

export default Game;
