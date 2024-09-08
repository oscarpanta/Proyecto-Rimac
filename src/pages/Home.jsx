import { Formulario } from "../components/Form/Form";

export const Home = () => {
  return (
    <section className="home row">
      <div className="home__content col-sm-6 col-12  row pe-0">
        <div className="home__img col-lg-12 col-md-12 col-sm-12 order-sm-1 order-2 col-6">
          <img src="assets/images/imagen_formulario.png" alt="" />
        </div>
        <div className="home__responsive d-sm-none order-sm-2 order-1  col-6 py-5 text-center">
          <label className="home__responsive__informative__title mb-3">
            Seguro salud flexible
          </label>

          <h2 className="home__responsive__informative__text">
            Creado para ti y tu familia
          </h2>
        </div>
      </div>
       <div className="d-sm-none border-3 border-height"></div>
      <div className="home__formulario col-sm-6 col-12 order-2 px-5">
        <Formulario />
      </div>
    </section>
  );
};
