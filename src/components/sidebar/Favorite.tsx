import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  .cate {
    cursor: pointer;
  }
`;

function Favorite() {
  return (
    <>
      <Container>
        <div className="cate">관심 카테고리</div>
        <div className="cate">개발</div>
        <div className="cate">기획</div>
        <div className="cate">디자인</div>
      </Container>
    </>
  );
}

export default Favorite;
