import Homepage from "./components/Homepage";
import NewTierList from "./components/NewTierList";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/new' element={<NewTierList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
