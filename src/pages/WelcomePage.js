import React, { useEffect, useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import Main from '../components/main';

const WelcomePage = () => {

  console.log('WelcomePage 실행!');

  // 로그인 여부
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const userData = localStorage.getItem('userData');
    
    if (userData) setIsLoggedIn(true);
    else setIsLoggedIn(false);

  }, [isLoggedIn]);

  return (
    <>
      {!isLoggedIn && <LoginForm />}
      {isLoggedIn && <Main />}
    </>
  );
};

export default WelcomePage;
