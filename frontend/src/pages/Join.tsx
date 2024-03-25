import JoinForm from '@/components/JoinForm';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();
  return <JoinForm />;
};

export default Join;
