import { BrowserRouter, Routes, Route } from 'react-router-dom' ;

import Auth from 'view/Auth' ;
import Dashboard from 'view/Dashboard';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Auth />} />
        <Route path='' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
