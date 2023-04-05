import React from "react"
import { Provider } from 'react-redux';
import store, {history}  from './configs/reduxStore'

import { Route, Routes} from 'react-router-dom';
                            
import awsconfig from './aws-exports';
import { Amplify } from 'aws-amplify';

import { register } from './features/auth/reducers/registerSlce';
import { login } from './features/auth/reducers/loginSlice';

import TopBar from "./components/TopBar"
import HandleForm from "./features/auth/components/HandleAuthForm";
import RegisterForm from "./features/auth/components/RegisterForm";
import LoginForm from "./features/auth/components/LoginForm";
import VideoCapture from "./features/stream/components/VideoCapture"

import RegisterSuccess from "./features/auth/components/RegisterSuccess";

import { HistoryRouter as Router } from "redux-first-history/rr6";

export default function App() {

  Amplify.configure(awsconfig);

  return (
    <Provider store={store}>
      <Router history={history}>
        <TopBar/>
        <Routes >
              <Route path="/" Component={() => <div>Home</div>}/>
              <Route path="/login" Component={() => <HandleForm form={LoginForm} reduxAction={login}/>}/>
              <Route path="/register" Component={() => <HandleForm form={RegisterForm} reduxAction={register}/>}/>
              <Route path="/register/success" Component={RegisterSuccess}/>
              <Route path="/video-capture" Component={VideoCapture}/>
              {/* <Route exact path="/">
                <Navigate to="/login" />
              </Route> */}

          </Routes>
        </Router>
    </Provider>
  );
}
