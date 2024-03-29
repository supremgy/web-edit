import JoinForm from '@/components/JoinForm';
import { withUnauthenticated } from '@/components/hocs/withUnauthenticated';
export const JoinPage = withUnauthenticated(() => {
  return <JoinForm />;
});
