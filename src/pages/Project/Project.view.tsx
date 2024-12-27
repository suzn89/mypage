import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectPageProps {
  title: string;
}


const SubPage = ({ title }: ProjectPageProps) => {
  return (
    <div>
      <h1>Sub Page</h1>
      <p>This is the sub page!</p>
      <Link to="/">Go back to Main Page</Link>
    </div>
  );
};

export default SubPage;