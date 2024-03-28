import withUnauthenticated from '@/components/hocs/withUnauthenticated';
import { IndexTemplate } from './Index.template';

const IndexPage = () => {
  return <IndexTemplate />;
};

export default withUnauthenticated(IndexPage);
