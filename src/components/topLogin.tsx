import { Button } from '@progress/kendo-react-buttons';
import { Link } from 'react-router-dom';

export default function TopLogin() {
  return (
    <div className="flex my-4">
      <Link to="/signup">
        <Button className="mr-10">Create user</Button>
      </Link>
      <Link to="/login">
        <Button>Logout</Button>
      </Link>
    </div>
  );
}
