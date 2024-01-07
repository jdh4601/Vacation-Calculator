import React from 'react';
import TravelImg from '../../Assets/undraw_traveling_yhxq 1.png';
import '../../App.css';

const Loading = () => {
  return (
    <div className="container">
      <h1 className="main-title">🏝️ 휴가 계산기</h1>
      <img className="imgs" src={TravelImg} />
    </div>
  );
};

export default Loading;
