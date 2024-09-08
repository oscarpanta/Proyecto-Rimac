import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { Await, NavLink } from "react-router-dom";

export const Plans = ({ plans, user }) => {
  console.log(plans);
  console.log(user);
  const [seleccion, setSeleccion] = useState(null);
  const [activeTab, setActiveTab] = useState("planes");
  const [planSeleccionado, setPlanSeleccionado] = useState(null);
  const userData = JSON.parse(localStorage.getItem("usuario"));

  const handleSeleccion = (tipo) => {
    setSeleccion(tipo);
  };
  const planSeleccion = (plan, active) => {
    setActiveTab(active);
    setPlanSeleccionado(plan);
  };
  const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }

    return edad;
  };

  console.log(user.birthDay);
  const edadUsuario = calcularEdad(user.birthDay);

  const planesFiltrados =
    plans?.list?.filter((plan) => plan.age >= edadUsuario) || [];
  console.log(planesFiltrados);

  return (
    <div className="container-fluid my-4 planes">
      <Tab.Container activeKey={activeTab}>
        <Nav variant="tabs" className="mb-3 planes__tabs">
          <Nav.Item>
            <Nav.Link
              eventKey="planes"
              onClick={() => setActiveTab("planes")}
              disabled={activeTab === "resumen"}
            >
              <span className="me-2">1</span> <label>Planes y coberturas</label>
            </Nav.Link>
          </Nav.Item>
          <label className="d-flex align-items-center">.....</label>
          <Nav.Item>
            <Nav.Link eventKey="resumen" disabled={!seleccion}>
              <span className="me-2">2</span> <label>Resumen</label>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          {/* Tab Planes */}
          <Tab.Pane eventKey="planes">
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
                onClick={() => handleSeleccion("para_mi")}
              >
                <div className="card position-relative planes__card">
                  <div className="card-body">
                    <img
                      src="../../src/assets/icon/IcAddUserLight.png"
                      alt="Icon"
                    />
                    <h5 className="card-title">Para mi</h5>
                    <p className="">
                      Cotiza tu seguro de salud y agrega familiares si así lo
                      deseas
                    </p>
                    <input
                      type="radio"
                      name="cotizacion"
                      className="form-check-input posicion-radio"
                      onChange={() => handleSeleccion("para_mi")}
                      checked={seleccion === "para_mi"}
                    />
                  </div>
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-4 my-lg-0 my-4"
                onClick={() => handleSeleccion("para_alguien_mas")}
              >
                <div className="card position-relative planes__card">
                  <div className="card-body">
                    <img
                      src="../../src/assets/icon/IcProtectionLight.png"
                      alt="Icon"
                    />

                    <h5 className="card-title">Para alguien más</h5>
                    <p className="">
                      Realiza una cotizacion para uno de tus familiares o
                      cualquier persona-
                    </p>
                    <input
                      type="radio"
                      name="cotizacion"
                      className="form-check-input posicion-radio"
                      onChange={() => handleSeleccion("para_alguien_mas")}
                      checked={seleccion === "para_alguien_mas"}
                    />
                  </div>
                </div>
              </div>
            </div>

            {seleccion && (
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
                            <img
                              src="../../src/assets/icon/IcHomeLight.png"
                              alt="Icon"
                            />
                          </div>
                        </div>

                        <div className="my-4">
                          <ul>
                            {plan.description.map((description, index2) => (
                              <li key={index2}>{description}</li>
                            ))}
                       
                          </ul>
                        </div>
                        <button
                          className="d-flex justify-content-center w-full"
                          onClick={() => planSeleccion(plan, "resumen")}
                        >
                          Seleccionar Plan
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="resumen">
            <div className="planes__volver">
              <div>
                <a
                  onClick={() => planSeleccion({}, "planes")}
                  className=""
                >
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
                    {planSeleccionado?.name}
                  </p>

                  {seleccion == "para_alguien_mas" ? (
                    <p className="planes__resumen__data__section3__costo">
                      Costo del plan: ${planSeleccionado?.price * 0.95}
                    </p>
                  ) : (
                    <p className="planes__resumen__data__section3__costo">
                      Costo del plan: ${planSeleccionado?.price}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};
