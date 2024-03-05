import '@progress/kendo-theme-default/dist/all.css';
import { Button } from '@progress/kendo-react-buttons';
import TopLogin from '../components/topLogin';
import FormInput from '../components/formInput';
import { useAuth } from '../hooks/useAuth';

export default function Signup() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="m-10">
      <TopLogin handleLogout={handleLogout} />
      <div>
        <h1 className="text-xl font-bold">Register</h1>
        <div className="row example-wrapper" style={{ minHeight: 450 }}>
          <div className="col-12 col-md-6 example-col">
            <FormInput type="text" labelText="Name" />
            <FormInput type="email" labelText="Email" />
            <FormInput type="password" labelText="Password" />
            <FormInput type="password" labelText="Confirm password" />
          </div>
          <Button>Register</Button>
        </div>
      </div>
    </div>
  );
}
