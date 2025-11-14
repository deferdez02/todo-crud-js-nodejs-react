import react from "react";
const handlePrint = () => {
  window.print();
};
function todayDate(): string {
  const today = new Date();
  const day = today.getDate();
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const month = monthNames[today.getMonth()];
  return `${day} de ${month}`;
}
function toolbar() {
  return (
    <div className="d-flex mt-4 p-3">
      <div className="me-auto ">
        <h5 className="text-secondary d-inline">
          <i className="bi bi-brightness-high fs-3 pe-2"></i>
          {todayDate()}
        </h5>
      </div>
    </div>
  );
}
export default toolbar;
