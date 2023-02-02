import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import CustomRouter from './components/CustomRouter';

import Signin from './components/Signin'
import Signup from './components/Signup'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <CustomRouter history={history}>
          <Routes>
            <Route path="/auth/signin" element={<Signin />} />
            <Route path="/auth/signup" element={<Signup />} />
          </Routes>
        </CustomRouter>
      </StylesProvider>
    </div>
  );
};
