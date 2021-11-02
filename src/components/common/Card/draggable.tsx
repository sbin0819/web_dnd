import { data } from './mock';
import {
  DragContainer,
  ImageContainer,
  DesContainer,
  FootContainer,
} from './styles';
import { Avartar } from '@common';
import Draggable, { DraggableEvent } from 'react-draggable';

/**
 * 3*4의 배수만큼 불러온다. 넘치는 만큼 skeleton card를 추가한다.
 */

interface IProps {
  width?: number;
  height?: number;
}

function DragCard({ width, height }: IProps) {
  const d = data[0];
  return (
    <Draggable>
      <DragContainer width={width} height={height}>
        <ImageContainer className="cd-header">
          <img src={`${d.img}`} alt="top" />
        </ImageContainer>
        <DesContainer className="cd-desc">
          <div className="cd-title">{d.desc.title}</div>
          <div className="cd-text">{d.desc.text}</div>
          <div className="cd-tag">{d.desc.tags[0]}</div>
        </DesContainer>
        <FootContainer className="cd-footer">
          <Avartar size={20} radius={50} />
          <div>{d.footer.name}</div>
        </FootContainer>
      </DragContainer>
    </Draggable>
  );
}

export default DragCard;
