export const Resumen = ({
  user,
  userData,
  planSeleccion,
  planSelected,
  selectedCotizacion,
}) => {
  return (
    <>
      <div className="planes__volver">
        <div>
          <a onClick={() => planSeleccion({}, "planes")} className="">
            <i class="fa-solid fa-circle-arrow-left me-2"></i>
            Volver
          </a>
        </div>
      </div>

      <div className="planes__resumen">
        <h2 className="mt-4 mb-5 planes__resumen__title">Resumen del seguro</h2>
        <div className="planes__resumen__data">
          <div className="planes__resumen__data__section1">
            <p className="planes__resumen__data__section1__head">
              Precios calculados para:
            </p>
            <p className="planes__resumen__data__section1__user">
              <i class="fa-solid fa-users me-2"></i>
              {user.name} {user.lastName}
            </p>
          </div>
          <div className="planes__resumen__data__section2 my-3 ">
            <p className="planes__resumen__data__section2__informative">
              Responsable de pago
            </p>
            <p className="planes__resumen__data__section2__dni">
              DNI: {userData.nroDocumento}
            </p>
            <p className="planes__resumen__data__section2__celular">
              Celular: {userData.celular}
            </p>
          </div>
          <div className="planes__resumen__data__section3  my-4">
            <p className="planes__resumen__data__section3__informative">
              Plan elegido
            </p>
            <p className="planes__resumen__data__section3__plan">
              {planSelected?.name}
            </p>

            {selectedCotizacion == "para_alguien_mas" ? (
              <p className="planes__resumen__data__section3__costo">
                Costo del plan: ${planSelected?.price * 0.95}
              </p>
            ) : (
              <p className="planes__resumen__data__section3__costo">
                Costo del plan: ${planSelected?.price}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
