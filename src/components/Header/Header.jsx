import Logo from "../../assets/Logo/Logo.svg";
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.container}`}>
        <div className={s.logo}>
          <img src={Logo} alt="Data Vision Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;