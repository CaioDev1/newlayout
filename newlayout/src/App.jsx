import React from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

import HomePage from './homePage/HomePage'
import ProfilePhotoPage from './profilePhotoPage/ProfilePhotoPage'
import LoginRegisterPage from './loginRegisterPage/LoginRegisterPage'

function App() {
    return (
        <Router basename='/'>
            <Route exact path='/profile-photo' component={ProfilePhotoPage} />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={() => <LoginRegisterPage page='login' />} />
            <Route exact path='/register' component={() => <LoginRegisterPage page='register' />} />
        </Router>
    )
}

export default App