import styled from 'styled-components';

import SearchForm from './searchForm';
import AddUrls from './addUrls';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
function SearchBar() {
  return (
    <Container>
      <SearchForm />
      <AddUrls />
    </Container>
  );
}

export default SearchBar;
