import './styles.scss';

import pokeball from '../../assets/pokeball.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="headerLogo">
        <img src={pokeball} alt="pokeball" className="headerLogoImg" />
        <span className="headerLogoName">POKÉDEX_</span>
      </div>
    </header>
  );
};

export default Header;
