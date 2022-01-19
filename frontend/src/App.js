import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing, Error, Register } from './pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Dashboard</div>} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
