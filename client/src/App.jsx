import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Header from './components/Header';
import Footer from './components/Footer';
import Chat from './components/Chat';
import Templates from './components/Templates';

const App = () => {
  return <>
     <div className='App box-border leading-8'>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<Templates />} />
      </Routes>
      <Footer/>
      <Chat/>
    </Router>
     </div>
  </>;
};

export default App;
