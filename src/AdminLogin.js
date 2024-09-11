import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import AdminDashboard from './AdminDashboard';

function AdminLogin({ signOut, user }) {
  return (
    <>
      <AdminDashboard/>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(AdminLogin);