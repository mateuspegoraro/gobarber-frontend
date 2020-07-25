import React from 'react';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/AuthContext';

import ToastContainer from './components/ToastContainer';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
