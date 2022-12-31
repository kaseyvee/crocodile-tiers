import Homepage from "./components/Homepage";
import NewTierList from "./components/NewTierList";
import ViewTierList from "./components/ViewTierList";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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
