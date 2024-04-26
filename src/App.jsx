import React from 'react'
import Navbar from './components/navbar'
import BreadCrumb from './components/breadCrumb'
import Content from './components/content'
import Faq from './components/faq'
function App() {
  return (
    <div className='px-48 gap-5'>
      <Navbar />
      <BreadCrumb />
      <Content />
      <Faq/>
      </div>
  )
}

export default App
