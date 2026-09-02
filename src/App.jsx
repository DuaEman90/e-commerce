import React from 'react'
import { Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<RootLayout />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
           </Route>
        </Routes>
    </div>
  )
}

export default App
