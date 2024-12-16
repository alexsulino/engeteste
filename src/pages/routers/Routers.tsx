//import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

export const Routers = () =>{
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Routers />} />
        <Route path="/home" element={<UseEffects />} />
      </Routes>
    </BrowserRouter>
  )
}

