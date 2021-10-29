import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Favorite } from '@components/Sidebar';
import Searchbar from '@components/Searchbar';
import Card from '@common/Card';

import useWindowSize from '@hooks/useWindowSize';
import useScoll from '@hooks/useScroll';
const Container = styled.div`
  display: flex;
  padding: 50px 35px;
  /* overflow: hidden; */
  overflow: ${({ theme }) => (theme.type !== 'mobile' ? 'scroll' : 'hidden')};
`;

interface IScroll {
  isScroll: boolean;
}

const SidebarContainer = styled.div<IScroll>`
  position: relative;
  top: ${({ isScroll }) => isScroll && '80px'};
  width: 300px;
  height: 100px;
`;

const CardContainer = styled.div<IScroll>`
  flex: 1;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 5px;
  height: 100vh;
  overflow: ${({ isScroll }) => isScroll && 'scroll'};
`;

function Home() {
  const [isScroll, setIsScroll] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const { width } = useWindowSize();
  const { scrollPosition } = useScoll();
  useEffect(() => {
    if (width && width > 800) {
      setIsSidebar(true);
    } else {
      setIsSidebar(false);
    }
  }, [width]);
  useEffect(() => {
    if (scrollPosition > 150) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [scrollPosition]);
  return (
    <div>
      <Searchbar />
      <Container>
        {isSidebar && (
          <SidebarContainer isScroll={isScroll}>
            <div className="sticky">
              <Favorite />
            </div>
          </SidebarContainer>
        )}
        <CardContainer isScroll={isScroll}>
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(
            (_, i) => (
              <Card key={i} />
            ),
          )}
        </CardContainer>
      </Container>
    </div>
  );
}

export default Home;
