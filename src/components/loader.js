// material-ui
import Skeleton from '@mui/material/Skeleton';
import styled from '@mui/material/styles/styled';

// styles
const LoaderWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%'
});

// ==============================|| LOADER ||============================== //

const Loader = () => (
  <LoaderWrapper>
    <Skeleton variant="rectangular" width='100%' height='20%' />
    <Skeleton variant="rectangular" width='100%' height='20%' />
    <Skeleton variant="rectangular" width='100%' height='20%' />
  </LoaderWrapper>
);

export default Loader;
