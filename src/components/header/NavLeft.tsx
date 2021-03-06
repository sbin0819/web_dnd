import Link from 'next/link';

import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';
const NavLeftContainer = styled.div`
  display: flex;
  gap: 15px;
`;

function NavLeft() {
  return (
    <NavLeftContainer>
      <Link href="/">
        <a>
          <FaReact />
        </a>
      </Link>
      <Link href="/">
        <a>ν νΌλ</a>
      </Link>
      <Link href="/board">
        <a>drag</a>
      </Link>
      <Link href="/favorite">
        <a>favorite</a>
      </Link>
    </NavLeftContainer>
  );
}

export default NavLeft;
