import styled from 'styled-components';

import NavLeft from './NavLeft';
import NavRight from './NavRight';

function Header() {
  return (
    <Container>
      <NavLeft />
      <NavRight />
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
