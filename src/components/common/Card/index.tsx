import styled from 'styled-components';
import { data } from './mock';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  max-width: 600px;
  aspect-ratio: ${({ theme }) => (theme.type == 'mobile' ? 7 / 6 : 7 / 8)};
  max-height: 450px;

  border: 1px solid grey;
  border-radius: 12px;
  color: #78797d;
`;

const ImageContainer = styled.div`
  position: relative;
  flex: ${({ theme }) => (theme.type == 'mobile' ? 7 : 5)};
  border-radius: 12px;
  img {
    border-radius: 12px 12px 0 0;
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center top;
  }
`;

const DesContainer = styled.div`
  flex: 5;
  position: relative;
  margin: 20px 15px;
  .cd-title {
    color: #fff;
  }
  .cd-text {
    position: absolute;
    margin-top: 18px;
    display: -webkit-box;
    width: inherit;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow: hidden; /* ★★ 설정이 필요한 영역 ★★ */ /* ★★ 3줄 이상은 말줄임 처리 ★★ */
    height: 40px; /* ★★ line-height * 3 ★★ */
    -webkit-line-clamp: 2; /* ★★ line-height:20px일때 ★★ */

    font-size: 18px;
    line-height: 1.1rem;
  }
  .cd-tag {
    position: absolute;
    bottom: 5px;
    font-size: 14px;
  }
`;

const FootContainer = styled.div`
  flex: 1.5;
  border-top: 1px solid #78797d;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

/**
 * 3*2의 배수만큼 불러온다. 넘치는 만큼 skeleton card를 추가한다.
 *햐
 */
function Card() {
  const d = data[0];
  return (
    <Container>
      <ImageContainer className="cd-header">
        <img src={`${d.img}`} />
      </ImageContainer>
      <DesContainer className="cd-desc">
        <div className="cd-title">{d.desc.title}</div>
        <div className="cd-text">{d.desc.text}</div>
        <div className="cd-tag">{d.desc.tags[0]}</div>
      </DesContainer>
      <FootContainer className="cd-footer">
        <span>
          {d.footer.img} {d.footer.name}
        </span>
      </FootContainer>
    </Container>
  );
}

export default Card;
