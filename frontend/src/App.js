import Homepage from "./components/Homepage";
import NewTierList from "./components/NewTierList";
import ViewTierList from "./components/ViewTierList";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/new' element={<NewTierList />} />
          <Route path='/:id' element={<ViewTierList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
