import styled from 'styled-components';
import A from '@components/a';
const Container = styled.div`
  background: gold;
  color: red;
`;
function test() {
  return (
    <Container>
      <A />
    </Container>
  );
}

export default test;
