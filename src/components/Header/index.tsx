import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="headerLogo">
        <img src="src/assets/pokeball.svg" alt="pokeball" className="headerLogoImg" />
        <span className="headerLogoName">POKÉDEX_</span>
      </div>
    </header>
  );
};

export default Header;
