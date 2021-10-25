import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { AddButton, Box } from '@common';

import UrlForm from './UrlForm';

import useInputs from '@hooks/useInputs';
import useClickOutside from '@hooks/useClickOutside';

const Container = styled.div`
  display: flex;
  gap: 15px;
`;

const AddButtonContainer = styled.div`
  position: relative;
`;

const favUrls = [{ title: '1', url: '' }];

function AddUrls() {
  const { form, onChange, reset } = useInputs({ url: '', title: '' });
  const [isOpen, setIsOpen] = useState(false);
  const [boxes, setBoxes] = useState(favUrls);
  const handleForm = () => setIsOpen((prev) => !prev);
  const formRef = useRef(null);
  useClickOutside(formRef, () => setIsOpen(false));
  const addUrl = (url: string, title: string) => {
    setBoxes((prev) => [...prev, { title, url }]);
    reset();
    setIsOpen(false);
  };
  return (
    <Container>
      {boxes.length !== 0 &&
        boxes.map((item, idx) => (
          <React.Fragment key={idx}>
            <Box title={item.title} />
          </React.Fragment>
        ))}
      <AddButtonContainer ref={formRef}>
        <AddButton onClick={handleForm} />
        {isOpen && (
          <UrlForm
            form={form}
            onChange={onChange}
            reset={reset}
            addUrl={addUrl}
          />
        )}
      </AddButtonContainer>
    </Container>
  );
}

export default AddUrls;
