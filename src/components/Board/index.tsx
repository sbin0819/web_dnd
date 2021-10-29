import styled from 'styled-components';
import Element from './Element';

const Container = styled.div``;

/**
 * ? frames 프레임 내에서 elements 들이 움질일 수 있음
 *   ? 활용 => 커스텀 페이지, 스티키 노트, 즐겨찾기, finder 같은 페이지
 * ? drags = [{id: .., type: ..., title: .., x: .., y: ..}, ...]
 *    ? type => input, header, serachbar, background, button
 * ? elements drags 들을 통해서 만들어 지는 element들
 */

export default function Board() {
  return (
    <Container>
      <Element title={'drag me!'} />
      <Element title={'hello pal!'} />
    </Container>
  );
}
