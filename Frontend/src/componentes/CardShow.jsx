function CardShow() {
  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="card w-75">
        <div className="card-body d-flex gap-2 ">
          <input
            className="form-check-input ms-2"
            type="radio"
            name="radioDefault"
            id="radioDefault1"
          ></input>
          Sacar la basura
          <div className="ms-auto ">
            <i className="bi bi-star text-secondary"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardShow;
