import React from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './homePage/HomePage'
import ProfilePhotoPage from './profilePhotoPage/ProfilePhotoPage'

function App() {
    return (
        <Router>
            <Route exact path='/profile-photo' component={ProfilePhotoPage} />
            <Route exact path='/home' component={HomePage} />
            {/* <Route exact path='/login' component={} />
            <Route exact path='/register' component={} /> */}
        </Router>
    )
}

export default App