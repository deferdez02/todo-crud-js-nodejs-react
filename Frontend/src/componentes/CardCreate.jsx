function card() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card w-75 ">
          <button
            className="btn btn-light w-100 text-secondary text-start"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i className="bi bi-plus-circle fs-5 px-2"></i>
            Crea la tarea
          </button>

          <div className="collapse " id="collapseExample">
            <div className="d-flex mx-3 my-1">
              <button className="btn btn-danger btn-sm me-2">Cancelar</button>
              <button className="btn btn-success btn-sm me-2"> Crear</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default card;
