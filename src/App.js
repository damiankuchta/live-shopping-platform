import React from "react"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store  from './configs/reduxStore'

import { Route, Routes} from 'react-router-dom';

import TopBar from "./components/TopBar"
import awsconfig from './aws-exports';
import { Amplify } from 'aws-amplify';
import HandleForm from "./features/auth/components/HandleForm";
import RegisterForm from "./features/auth/components/RegisterForm";
import LoginForm from "./features/auth/components/LoginForm";
import { register } from './features/auth/reducers/registerSlce';
import { login } from './features/auth/reducers/loginSlice';

export default function App() {

  Amplify.configure(awsconfig);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <TopBar/>
        <Routes>
              <Route path="/login" Component={() => <HandleForm form={LoginForm} reduxAction={login}/>}/>
              <Route path="/register" Component={() => <HandleForm form={RegisterForm} reduxAction={register}/>}/>
              {/* <Route exact path="/">
                <Navigate to="/login" />
              </Route> */}

          </Routes>
        </BrowserRouter>
    </Provider>
  );
}
