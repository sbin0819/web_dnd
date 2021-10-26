import Image from 'next/image';
import styled from 'styled-components';

import SearchForm from './searchForm';
import AddUrls from './addUrls';

import { RiSettings2Fill } from 'react-icons/ri';
import imageUrl from '../../../public/img/searchbar/universe.jpg';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  height: 200px;
`;
const ImageContainer = styled.div`
  position: absolute;
  height: 200px;
  width: 100%;
  pointer-events: none;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    object-position: center top;
  }
  z-index: -1;
`;

const EditBar = styled.div`
  display: flex;
  align-items: center;
`;

const SettingsContainer = styled.div`
  position: absolute;
  left: 0;
  padding-left: 15px;
  .settings {
    color: #e2e2e2;
    font-size: 22px;
    cursor: pointer;
    background: #6d6d6d;
    padding: 3px 4px;
    border-radius: 8px;
  }
`;
function SearchBar() {
  return (
    <>
      <Container>
        <ImageContainer>
          <Image src={imageUrl} layout="fill" alt="sidebar" />
        </ImageContainer>
        <SearchForm />
        <EditBar>
          <SettingsContainer>
            <div className="settings">
              <RiSettings2Fill />
            </div>
          </SettingsContainer>
          <AddUrls />
        </EditBar>
      </Container>
    </>
  );
}

export default SearchBar;
