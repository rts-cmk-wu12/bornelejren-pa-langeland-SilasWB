import { Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import Omos from './pages/om-os'
import Sponsertilmeld from './pages/sponsertilmeld'
import Tak from './pages/tak'

function App() {
 

  return (
    <>
      <Routes>
        <Route path = "/" element = {<Index />} />
        <Route path = "/omos" element = {<Omos />} />
        <Route path = "/sponsertilmeld" element = {<Sponsertilmeld />} />
        <Route path = "/tak" element = {<Tak />} />
      </Routes>
    </>
  )
}

export default App
