import { PropagateLoader } from 'react-spinners';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <PropagateLoader color="#748cf2" size={30} />
    </div>
  );
};

export default Loader;
