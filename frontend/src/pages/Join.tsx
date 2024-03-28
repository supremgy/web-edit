import JoinForm from '@/components/JoinForm';
import withUnauthenticated from '@/components/hocs/withUnauthenticated';
const Join = () => {
  return <JoinForm />;
};

export default withUnauthenticated(Join);
