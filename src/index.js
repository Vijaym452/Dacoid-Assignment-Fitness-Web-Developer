import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import Home from './Home'
import reportWebVitals from './reportWebVitals'
import Start from './Start'
import Signup from './Signup'
import SignIn from './Signin'
import Goals from './Goals'
import WorkoutTracker from './WorkoutTracker'
import WorkoutSchedule from './WorkoutSchedule'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/start" Component={Start}></Route>
      <Route path="/signup" Component={Signup}></Route>
      <Route path="/signin" Component={SignIn}></Route>
      <Route path="/goals" Component={Goals}></Route>
      <Route path="/tracker" Component={WorkoutTracker}></Route>
      <Route path="/schedule" Component={WorkoutSchedule}></Route>
    </Routes>
  </BrowserRouter>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
