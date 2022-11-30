import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import DashBoard from '../Dashboard/DashBoard'
import Login from '../Sign-in/Login'
import SignUp from '../Sign-up/SignUp'

function Router1() {
  return (
    <div>
      <Router>
        <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/dashboard' element={<DashBoard/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Router1
