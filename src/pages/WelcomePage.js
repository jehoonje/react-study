import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import Main from '../components/main';
import { useRouteLoaderData} from 'react-router-dom';



const WelcomePage = () => {

  console.log('WelcomePage 실행!');

  const userData = useRouteLoaderData('user-data'); // 상위 라우트 페이지의 loader 데이터 불러오기
  console.log('userData: ', userData);
  return (
    <>
      {!userData && <LoginForm /> }
      {userData && <Main /> }
    </>
  );
};

export default WelcomePage;