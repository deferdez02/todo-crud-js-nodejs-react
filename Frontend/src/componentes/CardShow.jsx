function CardShow() {
  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="card w-75">
        <div className="card-body d-flex gap-2 ">
          <input
            className="form-check-input"
            type="radio"
            name="radioDefault"
            id="radioDefault1"
          ></input>
          This is some text within a card body.
          <button type="button" className="btn btn-dark  ms-auto">
            Dark
          </button>
        </div>
      </div>
    </div>
  );
}
export default CardShow;
