function toolbar() {
  return (
    <div className="d-flex mt-4 p-3">
      <div className="me-auto ">
        <h5 className="text-secondary d-inline">
          <i className="bi bi-brightness-high fs-3 pe-2"></i>
          Martes, 11 Noviembre
        </h5>
        <button
          type="button"
          className="btn text-secondary mx-2"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Imprimir"
        >
          <i className="bi bi-printer fs-3"></i>
        </button>
      </div>
      <div className=" ms-auto">
        <button type="button" className="btn text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down-up mx-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"
            />
          </svg>
          Ordenar
        </button>
        <button type="button" className="btn text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-collection mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z" />
          </svg>
          Grupo
        </button>
      </div>
    </div>
  );
}
export default toolbar;
