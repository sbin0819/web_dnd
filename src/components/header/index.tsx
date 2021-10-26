import styled from 'styled-components';

import NavLeft from './NavLeft';
import NavRight from './NavRight';

import useWindowSize from '@hooks/useWindowSize';

function Header() {
  const { width }: { width?: number } = useWindowSize();
  return (
    <Container>
      <NavLeft />
      {width && width > 550 && <NavRight />}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  font-size: 22px;
`;
