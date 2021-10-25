import Image from 'next/image';
import styled from 'styled-components';

interface IProps {
  size?: number;
  imgPath?: any;
}

const Container = styled.div<IProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 30%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover; // Optional
    border-radius: 30%;
  }
`;

function index({ size = 25, imgPath }: IProps) {
  return (
    <Container size={size}>
      {imgPath ? (
        <Image src={imgPath} layout="fill" alt="profile_img" />
      ) : (
        <div>A</div>
      )}
    </Container>
  );
}

export default index;
