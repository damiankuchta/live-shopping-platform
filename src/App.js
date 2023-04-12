import React from "react"
import { Provider } from 'react-redux';
import store, {history}  from './configs/reduxStore'

import { Route, Routes} from 'react-router-dom';
                            
import awsconfig from './aws-exports';
import { Amplify } from 'aws-amplify';
import AWS from 'aws-sdk';

import TopBar from "./components/Nav/TopBar"
import RegisterForm from "./features/auth/components/RegisterForm";
import LoginForm from "./features/auth/components/LoginForm";
import VideoCapture from "./features/stream/components/WebRTCCapture"

import RegisterSuccess from "./features/auth/components/RegisterSuccess";

import { HistoryRouter as Router } from "redux-first-history/rr6";
import { Authenticator } from '@aws-amplify/ui-react';
import SignOut from "./features/auth/components/SignOut";

import * as links from "./configs/routerLinks";

import PrivateRoute from "./components/Router/PrivateRoute"
import WebRTCCapture from "./features/stream/components/WebRTCCapture";
import CreateKinesisStream from "./features/stream/components/CreateKinesisStream";


AWS.config.update({
  region: 'eu-west-1', // replace with your desired region
});

export default function App() {

  Amplify.configure(awsconfig);

  return (
    <Authenticator.Provider>
      <Provider store={store}>
        <Router history={history}>
          <TopBar/>
          <Routes >
                <Route path={links.home} Component={() => <div>Home</div>}/>
                <Route path={links.login} Component={LoginForm}/>
                <Route path={links.register} Component={RegisterForm}/>
                <Route path={links.signOut} Component={SignOut}/>
                <Route path={links.registerSuccess} Component={RegisterSuccess}/>
                <Route path={links.videoCapture} Component={VideoCapture}/>

                {/* Private routes */}
                <Route path={"/stream"} element={<PrivateRoute><WebRTCCapture/></PrivateRoute>}/>
                <Route path={"/create-kinesis-stream"} element={<PrivateRoute><CreateKinesisStream/></PrivateRoute>}/>

                                {/* <Route exact path="/">
                  <Navigate to="/login" />
                </Route> */}

            </Routes>
          </Router>
      </Provider>
    </Authenticator.Provider>
  );
}
