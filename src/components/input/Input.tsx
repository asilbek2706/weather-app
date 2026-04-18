import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import './input.css';

const Input = () => {
  return (
    <div className="input-wrapper">
      <input type="text" className="custom-input" />
      <MagnifyingGlassIcon
        width={32}
        height={32}
        className="custom-input-icon"
      />
    </div>
  );
};

export default Input;
