import logoMesto from '../images/logo-mesto.svg';
import { Route, Switch, Link } from 'react-router-dom';

function Header({ signOut, userEmail }) {
  return (
    <Switch>
      <Route path="/sign-in">
        <header className="header">
          <img src={logoMesto} alt="Логотип Mesto" className="header__logo" />
          <Link className="header__link" to="/sign-up">Регистрация</Link>
        </header>
      </Route>
      <Route path="/sign-up">
        <header className="header">
          <img src={logoMesto} alt="Логотип Mesto" className="header__logo" />
          <Link className="header__link" to="/sign-in">Вход</Link>
        </header>
      </Route>
      <Route path="/react-mesto-auth">
        <header className="header">
          <img src={logoMesto} alt="Логотип Mesto" className="header__logo" />
          <div className="header__items">
            <p className="header__text">{userEmail}</p>
            <Link
              className="header__link header__link_type_main-page"
              onClick={signOut}
              to="/sign-in"
            >Выйти</Link>
          </div>
        </header>
      </Route>
    </Switch>
  )
}

export default Header;
