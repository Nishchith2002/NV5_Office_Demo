import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SkySparkLogin from './pages/Login';
import FCUImage from "./components/FCUImage";
import Layout from "./layout/layout"
import Directory from './components/Directory';
import FCU1 from './components/FCU1'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
           <Route element={<Layout />}>
        <Route path="/" element={<SkySparkLogin />} />
        <Route path='/User' element={<Directory/>}/>
        <Route path="/fcu" element={<FCUImage />} /> {/* This route for FCU model */}
        <Route path="/fcu1" element={<FCU1 />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
