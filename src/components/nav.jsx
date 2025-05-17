import { Link } from "react-router"
import "../style/nav.scss"

    function Nav() {
    return (
      <>
        <header className="header">
          <nav className="header__nav">
            
                        <Link to="/" className="header__logo">
                          <img src="/logo.svg" alt="Børnelejren på Langeland" className="header__logo-img" />
                        </Link>
            
            <ul className="header__menu">
              <li className="header__menu-item"><Link to="/" className="header__menu-link">Forside</Link></li>
              <li className="header__menu-item"><Link to="/omos" className="header__menu-link">Om os</Link></li>
              <li className="header__menu-item"><Link to="/blivsponsor" className="header__menu-link">Tilmeld som Sponsor</Link></li>
              <li className="header__menu-item"><Link to="/tak" className="header__menu-link">Børnelejren takker</Link></li>            </ul>
          </nav>
        </header>
      </>
    )
}

export default Nav