import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router';
import { auth } from '../firebase';

export default function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return <>{children}</>;
  }

  return <Navigate to='/login' />;
}
