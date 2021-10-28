import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  min-width: 290px;
  max-width: 600px;
  aspect-ratio: 7 / 8;
  border: 1px solid grey;
  border-radius: 12px;
`;

/**
 * 3*2의 배수만큼 불러온다. 넘치는 만큼 skeleton card를 추가한다.
 *
 */
function Card() {
  return (
    <Container>
      <div className="cd-header">
        <img />
      </div>
      <div className="cd-desc">
        <div className="cd-title"></div>
        <div className="cd-text"></div>
        <div className="cd-tag"></div>
      </div>
      <div className="cd-footer">
        <div className="cd-info"></div>
        <div className="cd-option"></div>
      </div>
    </Container>
  );
}

export default Card;
