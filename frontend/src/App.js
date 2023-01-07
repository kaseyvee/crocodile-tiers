import useApplicationData from "./custom-hooks/useApplicationData";
import Homepage from "./components/Homepage";
import NewTierList from "./components/NewTierList";
import ViewTierList from "./components/ViewTierList";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { useEffect } from "react";

function App() {
  const applicationData = useApplicationData();

  useEffect(() => {
    applicationData.loadApplicationData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/new' element={<NewTierList />} />
          <Route
            path='/:id'
            element={
              <ViewTierList
                state={applicationData.state}
              />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
