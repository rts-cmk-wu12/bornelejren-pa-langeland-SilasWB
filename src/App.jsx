import { Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import Omos from './pages/om-os'
import Tak from './pages/tak'
import BlivSponsor from './pages/bliv-sponsor'

function App() {
 

  return (
    <>
      <Routes>
        <Route path = "/" element = {<Index />} />
        <Route path = "/omos" element = {<Omos />} />
        <Route path = "/blivsponsor" element = {<BlivSponsor />} />
        <Route path = "/tak" element = {<Tak />} />
      </Routes>
    </>
  )
}

export default App
