import { useContext, useEffect } from 'react';
import { StatusContext } from 'contexts/status-context';

export const StatusContainer = ({ Wrapper, children }) => {
  const { loaded } = useContext(StatusContext);

  useEffect(() => {
    loaded();
  }, [loaded]);

  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};
