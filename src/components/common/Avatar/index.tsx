// import Image from 'next/image';
import styled from 'styled-components';

interface IProps {
  size?: number;
  imgPath?: any;
  radius?: any;
}

const Container = styled.div<IProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${({ radius }) => radius}%;
  cursor: pointer;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center top;
    border-radius: ${({ radius }) => radius}%;
  }
`;

function index({ size = 25, imgPath, radius = 30 }: IProps) {
  return (
    <Container size={size} radius={radius}>
      {imgPath ? (
        <img src={'img/header/test.jpg'} alt="profile_img" />
      ) : (
        <div>A</div>
      )}
    </Container>
  );
}

export default index;
