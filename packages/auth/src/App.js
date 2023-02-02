import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import CustomRouter from './components/CustomRouter';

// import Landing from './components/Landing';
// import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <CustomRouter history={history}>
          <Routes>
            <Route path="/" element={null} />
          </Routes>
        </CustomRouter>
      </StylesProvider>
    </div>
  );
};
