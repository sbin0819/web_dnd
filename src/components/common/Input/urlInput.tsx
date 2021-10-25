import styled from 'styled-components';
import { BasicInputProps } from './types';

const StyledInput = styled.input`
  height: 30px;
  width: 100%;
  border: 0;
  outline: 0;
  height: 50px;
  color: #2c2d33;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  background: #f2f3f9;
  padding: 0 20px;
`;

function UrlInput({
  type,
  name,
  value,
  onChange,
  placeholder,
}: BasicInputProps) {
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default UrlInput;
