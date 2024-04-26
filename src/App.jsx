import React from 'react'
import Navbar from './components/navbar'
import BreadCrumb from './components/breadCrumb'
import Content from './components/content'
function App() {
  return (
    <div className='px-48 gap-5'>
      <Navbar />
      <BreadCrumb />
      <Content />
      </div>
  )
}

export default App
