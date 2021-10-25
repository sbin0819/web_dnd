import styled from 'styled-components';

const styles = {
  size: {
    md: { width: 82, height: 60, fontSize: 50 },
  },
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${styles.size.md.width}px;
  height: ${styles.size.md.height}px;
  background: #fff;
  border-radius: 8px;
  color: #000;
`;

interface IProps {
  title?: string;
}
function Box({ title }: IProps) {
  return <Container>{title}</Container>;
}

export default Box;
