import styled from 'styled-components';
import Element from './Element';

const Container = styled.div``;

/**
 *
 * drags = [
 * {
 * id: 'drag1',
 * title: 'drag me',
 * x: 100,
 * y: 200,
 * },
 * ...
 * ]
 */
export default function Board() {
  return (
    <Container>
      <Element title={'drag me!'} />
      <Element title={'hello pal!'} />
    </Container>
  );
}
