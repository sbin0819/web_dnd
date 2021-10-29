import Board from '@components/Board';
import styled from 'styled-components';
const Conatiner = styled.div``;
function board() {
  return (
    <Conatiner>
      <Board />
    </Conatiner>
  );
}

export default board;
