import '@progress/kendo-theme-default/dist/all.css';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import TopLogin from '../components/topLogin';

export default function Signup() {
  return (
    <div className="m-10">
      <TopLogin />
      <div>
        <h1 className="text-xl font-bold">Register</h1>
        <div className="row example-wrapper" style={{ minHeight: 450 }}>
          <div className="col-12 col-md-6 example-col">
            <div className="flex gap-4">
              <p>Username</p>
              <Input className="w-40" />
            </div>
            <div className="flex gap-4">
              <p>Email</p>
              <Input className="w-40" />
            </div>
            <div className="flex gap-4">
              <p>Password</p>
              <Input className="w-40" />
            </div>
            <div className="flex gap-4">
              <p>Confirm password</p>
              <Input className="w-40" />
            </div>
          </div>
          <Button>Register</Button>
        </div>
      </div>
    </div>
  );
}
