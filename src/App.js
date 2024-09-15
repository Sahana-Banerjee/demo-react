import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './login-page/login-page';
import HomePage from './home-page/home-page';

function App() {
  const message = "Welcome to our Gallery!"
  return (
    <Routes>
      <Route path='/' element={<LoginPage someData="hi" />} />
      <Route path='/home' element={<HomePage message={message} />} />
      {/* <Route path='-1' element={<LoginPage someData="bye" />} /> */}
    </Routes>
  );
}

export default App;
