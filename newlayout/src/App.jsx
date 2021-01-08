import React from 'react'

import {HashRouter as Router, Route, Link} from 'react-router-dom'

import HomePage from './homePage/HomePage'
import ProfilePhotoPage from './profilePhotoPage/ProfilePhotoPage'

function App() {
    return (
        <Router basename='/'>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/profile-photo">Profile photo</Link></li>
            </ul>

            <hr />
            <Route exact path='/profile-photo' component={ProfilePhotoPage} />
            <Route exact path='/home' component={HomePage} />
            {/* <Route exact path='/login' component={} />
            <Route exact path='/register' component={} /> */}
        </Router>
    )
}

export default App