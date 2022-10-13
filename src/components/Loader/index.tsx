import './styles.scss';

import pokeball from '../../assets/pokeball.svg';

const Loader = () => {
  return (
    <div className="loader">
      <img src={pokeball} alt="pokeball" className="headerLogoImg" />
    </div>
  );
};

export default Loader;
