import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index.jsx'

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-slate-50 text-slate-800">
        <div className="container-app py-10">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
