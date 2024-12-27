import React from 'react';
import { Link } from 'react-router-dom';

interface MainPageProps {
  title: string;
}

const MainPage = ({ title }: MainPageProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Welcome to the main page!</p>
      <Link to="/project">Go to Sub Page</Link>
    </div>
  );
};

export default MainPage;