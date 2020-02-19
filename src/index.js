import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/UI/Home/Home.scss";
import Chat from "./components/UI/Chat/Chat";
import Home from "./components/UI/Home/Home";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import {applyMiddleware, compose, createStore} from "redux";
import {adminReducer} from "./reducers";
import {Provider} from "react-redux";
import ReduxThunk from "redux-thunk";
//import {Elements, loadStripe} from '@stripe/react-stripe-js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
//MIDDLEWARE
const middleWare = store => next => action => {
    return next(action)
};

export const store = createStore(adminReducer,
    compose(
        applyMiddleware(ReduxThunk, middleWare),
    )
);

//const stripePromise = loadStripe('pk_test_74aZGrFdqGsIl2hxXNsqsoYf00qg92oML8');
//console.log("FFF", stripePromise);

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <div className={'page-full'} >
                <div className={'nav-bar'}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/chat" component={Chat} />
                    </Switch>
                </div>
            </div>
        </Router>
    </Provider>
    , document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
