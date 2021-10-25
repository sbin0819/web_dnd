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
  height: 54px;
  .icon {
    position: relative;
    left: 40px;
    color: rgba(255, 255, 255, 0.3);
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  color: black;
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.3);
  padding: 0 20px 2px 50px;
  border-radius: 10px;
  transition: all 150ms;
  background: rgba(255, 255, 255, 0.1);
  border: 0;
  outline: 0;
  :focus {
    color: white;
  }
`;

function index({
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
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Container>
  );
}

export default index;
