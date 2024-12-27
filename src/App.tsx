import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main/Main.view';
import SubPage from './pages/Project/Project.view';
import NotFoundPage from './pages/Error/Error.view';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage title="메인" />} />
        <Route path="/project" element={<SubPage title="프로젝트" />} />
        <Route path="*" element={<NotFoundPage title="오류" />} />
      </Routes>
    </Router>
  );
}

export default App;
