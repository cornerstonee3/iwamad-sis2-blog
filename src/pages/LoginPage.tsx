import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router';
import { Button } from '../components/ui/Button';

export default function LoginPage() {
  const { isSignedIn, signIn } = useAuth();

  if (isSignedIn) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Sign In Required</h2>
      <p style={{ marginBottom: '20px' }}>You must be signed in to view the admin dashboard.</p>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}