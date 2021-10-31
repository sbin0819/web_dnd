import { data } from './mock';
import {
  Container,
  ImageContainer,
  DesContainer,
  FootContainer,
} from './styles';
import { Avartar } from '@common';

/**
 * 3*2의 배수만큼 불러온다. 넘치는 만큼 skeleton card를 추가한다.
 *햐
 */
interface IProps {
  draggable?: boolean;
}
function Card({ draggable = false }: IProps) {
  const d = data[0];
  return (
    <Container>
      <ImageContainer className="cd-header">
        <img src={`${d.img}`} alt="top" />
      </ImageContainer>
      <DesContainer className="cd-desc">
        <div className="cd-title">{d.desc.title}</div>
        <div className="cd-text">{d.desc.text}</div>
        <div className="cd-tag">{d.desc.tags[0]}</div>
      </DesContainer>
      <FootContainer className="cd-footer">
        <Avartar size={20} imgPath="a" radius={50} />
        <div>{d.footer.name}</div>
      </FootContainer>
    </Container>
  );
}

export default Card;
