function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-icon">🌎</div>

        <div className="brand-text">
          <h1>Currency Exchange App</h1>
          <p>Converta e analise moedas de forma simples</p>
        </div>
      </div>

      <nav className="navigation">
        <a href="#inicio">Início</a>
        <a href="#historico">Histórico</a>
      </nav>
    </header>
  );
}

export default Header;
