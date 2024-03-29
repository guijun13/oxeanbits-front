import { Button } from '@progress/kendo-react-buttons';
import { Link } from 'react-router-dom';

export default function TopLogin({ handleLogout }: { handleLogout: () => void }) {
  return (
    <div className="flex my-4 gap-4">
      <Link to="/signup">
        <Button>Create user</Button>
      </Link>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
