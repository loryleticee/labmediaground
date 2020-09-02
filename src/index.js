import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './components/UI/Home/Home.scss'
import Home from './components/UI/Home/Home'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import { applyMiddleware, compose, createStore } from 'redux'
import { adminReducer } from './store/reducers'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// MIDDLEWARE
const middleWare = store => next => action => {
  return next(action)
}

export const store = createStore(adminReducer,
  compose(
    applyMiddleware(ReduxThunk, middleWare)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className='page-full'>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
