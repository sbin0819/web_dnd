import Link from 'next/link';
import styled from 'styled-components';
import imgPath from '../../../public/img/header/test.jpg';

import { Avartar } from '@components/common';
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

function NavRight() {
  return (
    <Container>
      <AiOutlineSearch />
      <AiOutlineBell />
      <Link href="/bookmark">
        <a>
          <BsBookmark />
        </a>
      </Link>
      <Link href="/profile">
        <a>
          <Avartar size={40} imgPath={imgPath} />
        </a>
      </Link>
    </Container>
  );
}

export default NavRight;
