import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Header from './components/Header';

const App = () => {
  return <>
     <div className='App'>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
     </div>
  </>;
};

export default App;
