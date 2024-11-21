import { Navigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function ProtectedRoute({ children }) {
  const { tokens } = useAuth();

  if (!tokens.accessToken) {
    return <Navigate to="/" replace />;
  }

  return (
    children
  );
}
