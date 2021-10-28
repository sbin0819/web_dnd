import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Favorite } from '@components/Sidebar';
import Searchbar from '@components/Searchbar';
import Card from '@common/Card';

import useWindowSize from '@hooks/useWindowSize';

const Container = styled.div`
  position: relative;
  display: flex;
  padding: 50px 35px;
`;

const SidebarContainer = styled.div`
  width: 300px;
  height: 100px;
`;

const CardContainer = styled.div`
  flex: 3;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 5px;
`;

function Home() {
  const [isSidebar, setIsSidebar] = useState(false);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width && width > 800) {
      setIsSidebar(true);
    } else {
      setIsSidebar(false);
    }
  }, [width]);
  return (
    <div>
      <Searchbar />
      <Container>
        {isSidebar && (
          <SidebarContainer>
            <div className="sticky">
              <Favorite />
            </div>
          </SidebarContainer>
        )}
        <CardContainer>
          {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, i) => (
            <Card key={i} />
          ))}
        </CardContainer>
      </Container>
    </div>
  );
}

export default Home;
