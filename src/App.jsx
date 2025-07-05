import { Routes, Route } from 'react-router-dom';
import Home from 'C:/Users/WELCOME/Desktop/dataScience/my-app/src/screen/home/Homepage.jsx';
import LoginPage from 'C:/Users/WELCOME/Desktop/dataScience/my-app/src/screen/login/loginpage.jsx';
import SignupPage from 'C:/Users/WELCOME/Desktop/dataScience/my-app/src/screen/login/signup.jsx';
import ResetPassword from 'C:/Users/WELCOME/Desktop/dataScience/my-app/src/screen/login/reset.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/reset" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
