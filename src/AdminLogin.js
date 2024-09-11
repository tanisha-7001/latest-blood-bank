import React from 'react';
import { Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import AdminDashboard from './AdminDashboard'
function AdminLogin({ signOut }) {
  return (
    <Authenticator hideSignUp={true} loginMechanisms={['username']}>
      {({ signOut }) => (
        <>
          <AdminDashboard />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </Authenticator>
  );
}

export default AdminLogin;
