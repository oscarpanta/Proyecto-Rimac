import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { Resumen } from "./Resumen/Resumen";
import { Plan } from "./Plan/Plan";

export const Plans = ({ plans, user }) => {
  const [selectedCotizacion, setSelectedCotizacion] = useState(null);
  const [activeTab, setActiveTab] = useState("planes");
  const [planSelected, setPlanSelected] = useState(null);
  const userData = JSON.parse(localStorage.getItem("usuario"));

  const handleSelectedCotizacion = (tipo) => {
    setSelectedCotizacion(tipo);
  };

  const planSeleccion = (plan, active) => {
    setActiveTab(active);
    setPlanSelected(plan);
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

  const edadUsuario = calcularEdad(user.birthDay);

  const planesFiltrados =
    plans?.list?.filter((plan) => plan.age >= edadUsuario) || [];

  return (
    <div className="container-fluid my-4 planes">
      <Tab.Container activeKey={activeTab}>
        <Nav variant="tabs" className="mb-3 planes__tabs">
          <Nav.Item>
            <Nav.Link
              eventKey="planes"
              // onClick={() => setActiveTab("planes")}
              disabled
              // disabled={activeTab === "resumen"}
            >
              <span className="me-2">1</span> <label>Planes y coberturas</label>
            </Nav.Link>
          </Nav.Item>
          <label className="d-flex align-items-center">.....</label>
          <Nav.Item>
            <Nav.Link
              eventKey="resumen"
              disabled
              // disabled={!seleccion}
            >
              <span className="me-2">2</span> <label>Resumen</label>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          {/* Tab Planes */}
          <Tab.Pane eventKey="planes">
            <Plan
              user={user}
              handleSelectedCotizacion={handleSelectedCotizacion}
              selectedCotizacion={selectedCotizacion}
              planesFiltrados={planesFiltrados}
              planSeleccion={planSeleccion}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="resumen">
            <Resumen
              user={user}
              userData={userData}
              planSeleccion={planSeleccion}
              planSelected={planSelected}
              selectedCotizacion={selectedCotizacion}
            />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};
