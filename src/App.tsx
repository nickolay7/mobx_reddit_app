import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { NotFoundPage } from 'pages/NotFoundPage'
import {Home} from "./pages/Home";

import './scss/main.scss'

const About = () => <h2>About</h2>

function App() {
  return (
    <div className='ui-wrapper'>
      <Header className='' />
      <div className='ui-content-wrapper'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
