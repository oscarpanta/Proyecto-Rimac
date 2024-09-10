import { NavLink } from "react-router-dom";

export const Plan = ({
  user,
  handleSelectedCotizacion,
  selectedCotizacion,
  planesFiltrados,
  planSeleccion,
}) => {
  return (
    <>
      <NavLink to="/" className="planes__volver ms-5">
        <div>
          <i class="fa-solid fa-circle-arrow-left me-2"></i>
          Volver
        </div>
      </NavLink>

      <div className="text-center planes__informative">
        <p className="planes__informative__head uppercase">
          {user.name} ¿Para quién deseas cotizar?
        </p>
        <p className="planes__informative__text">
          Seleccione la opcion que mas se ajuste a tus necesidades
        </p>
      </div>

      <div className="row justify-content-center">
        <div
          className=" col-xl-3 col-lg-4 my-lg-0 my-4"
          onClick={() => handleSelectedCotizacion("para_mi")}
        >
          <div className="card position-relative planes__card">
            <div className="card-body">
              <img src="/assets/icon/IcAddUserLight.png" alt="Icon" />
              <h5 className="card-title">Para mi</h5>
              <p className="">
                Cotiza tu seguro de salud y agrega familiares si así lo deseas
              </p>
              <input
                type="radio"
                name="cotizacion"
                className="form-check-input posicion-radio"
                onChange={() => handleSelectedCotizacion("para_mi")}
                checked={selectedCotizacion === "para_mi"}
              />
            </div>
          </div>
        </div>

        <div
          className="col-xl-3 col-lg-4 my-lg-0 my-4"
          onClick={() => handleSelectedCotizacion("para_alguien_mas")}
        >
          <div className="card position-relative planes__card">
            <div className="card-body">
              <img src="/assets/icon/IcProtectionLight.png" alt="Icon" />

              <h5 className="card-title">Para alguien más</h5>
              <p className="">
                Realiza una cotizacion para uno de tus familiares o cualquier
                persona-
              </p>
              <input
                type="radio"
                name="cotizacion"
                className="form-check-input posicion-radio"
                onChange={() => handleSelectedCotizacion("para_alguien_mas")}
                checked={selectedCotizacion === "para_alguien_mas"}
              />
            </div>
          </div>
        </div>
      </div>

      {selectedCotizacion && (
        <div className="row mt-4 planes__width">
          {planesFiltrados.map((plan, index) => (
            <div className="col-md-6 col-lg-4 my-4 my-md-2">
              <div className="card planes__card__plan">
                <div className="card-body">
                  <div className="row mx-auto planes__head justify-content-between">
                    <div className="row col-7 mb-4 pe-0">
                      <h2 className="card-title">{plan.name}</h2>
                      <span className="card-text planes__costo__title">
                        Costo del plan
                      </span>
                      <span className="planes__costo__precio">
                        ${plan.price} al mes
                      </span>
                    </div>
                    <div className="col-5">
                      <img src="/assets/icon/IcHomeLight.png" alt="Icon" />
                    </div>
                  </div>

                  <div className="my-4">
                    <ul>
                      {plan.description.map((description, index2) => (
                        <li key={index2}>{description}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <button
                      className="d-flex justify-content-center w-full"
                      onClick={() => planSeleccion(plan, "resumen")}
                    >
                      Seleccionar Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
