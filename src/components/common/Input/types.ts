export interface BasicInputProps {
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

export interface IProps extends BasicInputProps, InputStyleProps {
  icon?: boolean;
  label?: any;
}
