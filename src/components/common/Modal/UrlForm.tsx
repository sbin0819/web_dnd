import { useRef, useEffect } from 'react';
import { UrlInput } from '@common';

import styled from 'styled-components';

const FormContainer = styled.div`
  position: absolute;
  top: 72px;
  left: 50%;
  padding: 20px 20px;
  height: 220px;
  min-width: 320px;
  width: 390px;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 10px;
  /* pointer-events: none; */
  box-shadow: rgb(24 25 31 / 12%) 0 0 22px;
  .a::after {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #fff;
  }
  z-index: 10;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  .input_container {
    flex: 1;
  }
`;

const ButtonContaienr = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0;
  padding: 10px 20px 15px;
  button {
    width: 100px;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
    border-radius: 48px;
    border: 0;
    cursor: pointer;
  }
`;

interface IProps {
  form: any;
  onReset: () => void;
  onChange: (e: any) => void;
  addUrl: (url: string, title: string) => void;
}
function UrlForm({ form, onChange, onReset, addUrl }: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);
  const { url, title } = form;
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (url && title) {
      addUrl(url, title);
    } else {
      alert('잘못된 입력입니다.');
    }
  };
  return (
    <FormContainer>
      <StyledForm onSubmit={onSubmit}>
        <div className="input_container">
          <UrlInput
            name="url"
            value={url}
            onChange={onChange}
            placeholder="url을 입력해주세요"
            // ref={inputRef}
          />
        </div>
        <div className="input_container">
          <UrlInput
            name="title"
            value={title}
            onChange={onChange}
            placeholder="타이틀을 입력해주세요"
          />
        </div>
        <ButtonContaienr>
          <button type="button" onClick={() => onReset()}>
            취소
          </button>
          <button type="submit">확인</button>
        </ButtonContaienr>
      </StyledForm>
      <div className="figure"></div>
    </FormContainer>
  );
}

export default UrlForm;
