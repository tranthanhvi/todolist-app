import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import Todolist from './Todolist';
import './App.css'

function App() {

  return (
    <>
<BrowserRouter>

    <nav>
      <Link to="/">Home</Link>{' '}
      <Link to="/todolist">Todolist</Link>{' '}
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todolist" element={<Todolist />} />
    </Routes>
</BrowserRouter>

    </>
  );
  
}

export default App
