function card() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="w-75">
          <button
            className="btn btn-primary w-100 "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Crea la tarea
          </button>

          <div className="collapse " id="collapseExample">
            <div className="card card-body">
              <div className="d-flex gap-2">
                <button className="btn btn-success btn-sm me-2">Hecho</button>
                <button className="btn btn-danger btn-sm">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default card;
