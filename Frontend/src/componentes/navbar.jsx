function navbar() {
  return (
    <nav className="navbar  bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand me-auto">CheckIt!</a>

        <form className="d-flex me-auto w-50" role="search">
          <input
            className="form-control bg-secondary"
            type="search"
            placeholder="Comprar pan"
            aria-label="Search"
          />
          <button className="btn btn-success" type="submit">
            Buscar
          </button>
        </form>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
      </div>
    </nav>
  );
}
export default navbar;
