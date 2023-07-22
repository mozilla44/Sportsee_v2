import "../styles/css/header.css"

function Header() {
  return (
  <header className="header">
    <img src="/assets/logo.svg" alt="logo de Sportsee" className="header_logo"></img>
    <nav className="header_nav">
        <a href="#" className="header_link">Accueil</a>
        <a href="#" className="header_link">Profil</a>
        <a href="#" className="header_link">Réglages</a>
        <a href="#" className="header_link">Communauté</a>
        
    </nav>
  </header>
  );
}

export default Header;
