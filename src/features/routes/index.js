import { useRoutes } from 'react-router-dom';
import PublicRoutes from './public-routes';

export default function Routes() {
  return useRoutes([PublicRoutes]);
}
