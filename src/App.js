import React from "react"
import { Provider } from 'react-redux';
import store, {history}  from './configs/reduxStore'

import { Route, Routes} from 'react-router-dom';
                            
import awsconfig from './aws-exports';
import { Amplify } from 'aws-amplify';

import TopBar from "./components/TopBar/TopBar"
import RegisterForm from "./features/auth/components/RegisterForm";
import LoginForm from "./features/auth/components/LoginForm";
import VideoCapture from "./features/stream/components/VideoCapture"

import RegisterSuccess from "./features/auth/components/RegisterSuccess";

import { HistoryRouter as Router } from "redux-first-history/rr6";
import { Authenticator } from '@aws-amplify/ui-react';
import SignOut from "./features/auth/components/SignOut";

export default function App() {

  Amplify.configure(awsconfig);

  return (
    <Authenticator.Provider>
      <Provider store={store}>
        <Router history={history}>
          <TopBar/>
          <Routes >
                <Route path="/" Component={() => <div>Home</div>}/>
                <Route path="/login" Component={LoginForm}/>
                <Route path="/register" Component={RegisterForm}/>
                <Route path="/signOut" Component={SignOut}/>
                <Route path="/register/success" Component={RegisterSuccess}/>
                <Route path="/video-capture" Component={VideoCapture}/>
                {/* <Route exact path="/">
                  <Navigate to="/login" />
                </Route> */}

            </Routes>
          </Router>
      </Provider>
    </Authenticator.Provider>
  );
}
