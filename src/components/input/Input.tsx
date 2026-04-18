import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import './input.css';
import type { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  getCurrentWeather: () => Promise<void>;
}

const Input = ({ getCurrentWeather, ...props }: IProps) => {
  return (
    <div className="input-wrapper">
      <input type="text" className="custom-input" {...props} />
      <MagnifyingGlassIcon
        width={32}
        height={32}
        className="custom-input-icon"
        onClick={getCurrentWeather}
      />
    </div>
  );
};

export default Input;
