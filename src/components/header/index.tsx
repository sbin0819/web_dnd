import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Sidebar from '@components/sidebar';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 50px;
  background: gold;
`;
function Header() {
  const router = useRouter();
  return (
    <Container>
      <Link href="/">
        <a>WEB-DND</a>
      </Link>
      <Link href="/board">
        <a>board</a>
      </Link>
      <Link href="/favorite">
        <a>favorite</a>
      </Link>
      <div
        style={{
          position: 'absolute',
          right: 25,
          cursor: 'pointer',
          background: 'grey',
          padding: '10px 15px',
          color: 'white',
        }}
      >
        버튼
      </div>
      <Sidebar />
    </Container>
  );
}

export default Header;
