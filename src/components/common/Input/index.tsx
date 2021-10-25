import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

interface BasicInputProps {
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: any) => void;
}

interface InputStyleProps {
  width?: number;
  height?: number;
}

interface IProps extends BasicInputProps, InputStyleProps {
  icon?: boolean;
  label?: any;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  min-width: 300px;
  height: 54px;
  .icon {
    position: relative;
    left: 35px;
  }
`;

const StyledInput = styled.input<{ icon?: boolean }>`
  width: 100%;
  height: 100%;
  color: #ffff;
  font-size: 16px;
  font-weight: 500;

  padding: ${({ icon }) => (icon ? '20px 45px' : '20px 20px')};

  border-radius: 10px;
  transition: all 150ms;
  background: #a7a6a6;
  opacity: 0.75;
  border: 0;
  outline: 0;
  :focus {
    opacity: 1;
    color: black;
    background: white;
  }
  ::placeholder {
    color: white;
  }
`;

// focus 일 떼 label x
function Input({
  icon = true,
  type,
  name,
  value,
  onChange,
  placeholder,
  width,
  height,
}: IProps) {
  return (
    <Container>
      {icon && (
        <span className="icon">
          <AiOutlineSearch />
        </span>
      )}
      <StyledInput
        icon={icon}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
}

export default Input;
