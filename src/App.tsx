import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Main} from './pages/createpost/main/Main'
import Login from './pages/Login'
import {Navbar} from './components/Navbar'
import {CreatePost} from './pages/createpost/CreatePost'
import Footer from './components/Footer'

function App() {
  
  return (
    <div className='main'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App 
/*
Install firebase and firebase hook:
npm install firebase
npm install react-firebase-hooks
*/ 

/*
I am glad to announce that the journey of react that I started early August is gradually coming to an end. Although I have not concluded yet, but i am delighted on how far I have gone.
*/ 