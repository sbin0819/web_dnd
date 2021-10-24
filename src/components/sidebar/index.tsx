import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  background: pink;
  width: 30%;
  min-height: 300px;
  padding: 150px 40px;
`;

function index() {
  return (
    <Container>
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
      <div>item4</div>
    </Container>
  );
}

export default index;
