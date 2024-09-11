import React from 'react';
import { Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import AdminDashboard from './AdminDashboard';

const CustomSignIn = (props) => (
  <Authenticator hideSignUp>
    {({ signOut }) => (
      <>
        <AdminDashboard />
        <button onClick={signOut}>Sign out</button>
      </>
    )}
  </Authenticator>
);

function AdminLogin() {
  return (
    <CustomSignIn />
  );
}

export default AdminLogin;
