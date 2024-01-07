import React, { useRef, useState, useEffect, useContext } from 'react';
import LoginImg from '../../Assets/undraw_login_re_4vu2 1.png';
import Line from '../../Assets/Line 1.png';
import GoogleLogin from '../../Assets/android_light_rd_ctn@2x 1.png';

const Signup = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const handleSubmit = () => {};
  const userRef = useRef();

  // useEffect(() => {
  //   userRef.current.focus(); // DOM API focus() 호출, 선택한 DOM 요소
  // }, []);

  return (
    <div className="container">
      <img className="imgs" src={LoginImg} />
      <h1 className="sub-title">로그인</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="flex">
          <label className="label-text" htmlFor="userId">
            ID
          </label>
          <input
            className="input-text"
            type="text"
            id="userid"
            autoComplete="off"
            ref={userRef}
            onChange={e => setUserId(e.target.value)}
            value={userId}
            required
          />
        </div>
        <div className="flex">
          <label className="label-text" htmlFor="userPw">
            PW
          </label>
          <input
            className="input-text"
            type="password"
            id="password"
            ref={userRef}
            onChange={e => setUserPw(e.target.value)}
            value={userPw}
            required
          />
        </div>
        <div className="button-container">
          <button className="login-button">회원가입</button>
          <button className="login-button">로그인</button>
        </div>
      </form>
      <div className="line-box">
        <img className="line" src={Line} />
        <p className="line-text">OR</p>
        <img className="line" src={Line} />
      </div>
      <img src={GoogleLogin} />
    </div>
  );
};

export default Signup;
