import "./styles.css";

function navbar() {
  return (
    <nav className="navbar bgDark">
      <div className="container-fluid">
        <h4 className="navbar-brand me-auto px-3 text-light">CheckIt!</h4>

        <form className="input-group d-flex mx-auto w-50" role="search">
          <input
            className="form-control bgLight  "
            type="search"
            placeholder="Comprar pan"
            aria-label="Search"
          />
          <button className="btn text-secondary bg-light" type="submit">
            <i className="bi bi-search fs-5"></i>
          </button>
        </form>
        <div className="d-flex ms-auto">
          <button type="button" className="btn text-secondary  mx-2 ">
            <i className="bi bi-moon fs-4"></i>
          </button>
          <button type="button" className="btn btn-primary mx-2">
            Pri
          </button>
        </div>
      </div>
    </nav>
  );
}
export default navbar;
