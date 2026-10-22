import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';

export default function ProtectedPage() {
  const { signOut } = useAuth();

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p style={{ marginBottom: '20px' }}>Welcome to the super mega secret page</p>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}