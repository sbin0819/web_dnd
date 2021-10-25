import styled from 'styled-components';
import { BsPlus } from 'react-icons/bs';
import { styles } from './style';

const Container = styled.div<IProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: grey;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 8px;
  opacity: 0.7;
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize}px;
  :hover {
    opacity: 0.9;
  }
`;

interface IProps {
  width?: number;
  height?: number;
  fontSize?: number;
  onClick?: () => void;
}
function index({
  width = styles.size.md.width,
  height = styles.size.md.height,
  fontSize = styles.size.md.fontSize,
  onClick,
}: IProps) {
  return (
    <Container
      width={width}
      height={height}
      fontSize={fontSize}
      onClick={onClick}
    >
      <BsPlus />
    </Container>
  );
}

export default index;
