import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header id="main_header">
      <div className="innerbox">
        <h1>
          <Link to="/">
            <img src="/images/tlogo.png" alt="mulawear" />
          </Link>
        </h1>
        <nav className="main-navbar">
          <ul>
            <li>
              <Link to="/new">간편식/다이어트</Link>
            </li>
            <li>
              <Link to="/tops">헬스용품</Link>
            </li>
            <li>
              <Link to="/bottoms">보충제</Link>
            </li>
            <li>
              <Link to="/accessory">건강식품</Link>
            </li>
            <li>
              <Link to="/collection">홈트용품</Link>
            </li>
            <li>
              <Link to="/community">의류</Link>
            </li>
          </ul>
        </nav>
        <nav className="user-menu">
          <Link to="/login">LOGIN</Link>
          <Link to="/search">
            <FontAwesomeIcon icon={faSearch} />
            <span className="sr-only">search</span>
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="sr-only">basket</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
