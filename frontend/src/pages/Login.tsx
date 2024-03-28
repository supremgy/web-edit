import LoginForm from '@/components/LoginForm';
import withUnauthenticated from '@/components/hocs/withUnauthenticated';

const Login = () => {
  return <LoginForm />;
};

export default withUnauthenticated(Login);
