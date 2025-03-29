import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppJSX from './AppJSX';
import AskMePage from './Pages/AskMePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppJSX/>}/>
      <Route path='/askmepage' element={<AskMePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App