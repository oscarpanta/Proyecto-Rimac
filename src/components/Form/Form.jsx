import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./Form.module.scss";

export const Formulario = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    documento: Yup.string().required("El documento es obligatorio"),
    nroDocumento: Yup.string().required(
      "El número de documento es obligatorio"
    ),
    celular: Yup.string().required("El número de celular es obligatorio"),
    privacidad: Yup.boolean().oneOf(
      [true],
      "Debes aceptar la política de privacidad"
    ),
    comunicaciones: Yup.boolean().oneOf(
      [true],
      "Debes aceptar la política de comunicaciones"
    ),
  });


  const formik = useFormik({
    initialValues: {
      documento: "",
      nroDocumento: "",
      celular: "",
      privacidad: false,
      comunicaciones: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
 
      localStorage.setItem("usuario", JSON.stringify(values));

      navigate("/planes");
    },
  });
  return (
    <div className="home__formulario__content">
      <div className="content__informative">
        <div className="d-sm-block d-none">
          <label className="content__informative__title mb-3">
            Seguro salud flexible
          </label>

          <h2 className="content__informative__text">
            Creado para ti y tu familia
          </h2>
        </div>

        <p className="content__informative__text2">
          {" "}
          Tu eliges cuando pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoria. 100% online.
        </p>
      </div>

      <form className="formulario__data" onSubmit={formik.handleSubmit}>
        <div className=" my-4">
          <div className="row align-items-center formulario__data__fields ms-0">
            <div className="col-5">
              <select
                className={`form-select form-select-normal ${
                  formik.errors.documento && formik.touched.documento
                    ? "is-invalid"
                    : ""
                }`}
                name="documento"
                value={formik.values.documento}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option option value="" className="formulario__data__text">
                  Documento
                </option>
                <option value="Dni">DNI</option>
              </select>
              {formik.errors.documento && formik.touched.documento && (
                <div className="invalid-feedback">
                  {formik.errors.documento}
                </div>
              )}
            </div>
            <div className="col-7 formulario__data__fields__numero ms-0">
              <label className="formulario__data__label">Nro Documento</label>
              <input
                type="text"
                className={`form-control form-control-sm formulario__data__text ${
                  formik.errors.nroDocumento && formik.touched.nroDocumento
                    ? "is-invalid"
                    : ""
                }`}
                name="nroDocumento"
                value={formik.values.nroDocumento}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.nroDocumento && formik.touched.nroDocumento && (
                <div className="invalid-feedback">
                  {formik.errors.nroDocumento}
                </div>
              )}
            </div>
          </div>
          <div className="row align-items-center formulario__data__fields mt-3 ms-0 p-1">
            <label className="formulario__data__label">Celular</label>
            <input
              type="text"
              className={`form-control form-control-sm formulario__data__text ${
                formik.errors.celular && formik.touched.celular
                  ? "is-invalid"
                  : ""
              }`}
              name="celular"
              value={formik.values.celular}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.celular && formik.touched.celular && (
              <div className="invalid-feedback">{formik.errors.celular}</div>
            )}
          </div>
        </div>
        <div className="mb-3">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className={`form-check-input ${
                formik.errors.privacidad && formik.touched.privacidad
                  ? "is-invalid"
                  : ""
              }`}
              id="privacidad"
              name="privacidad"
              checked={formik.values.privacidad}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              className="form-check-label formulario__data__checkbox__label"
              htmlFor="privacidad"
            >
              Acepto la Política de Privacidad
            </label>
            {formik.errors.privacidad && formik.touched.privacidad && (
              <div className="invalid-feedback">{formik.errors.privacidad}</div>
            )}
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className={`form-check-input ${
                formik.errors.comunicaciones && formik.touched.comunicaciones
                  ? "is-invalid"
                  : ""
              }`}
              id="comunicaciones"
              name="comunicaciones"
              checked={formik.values.comunicaciones}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              className="form-check-label formulario__data__checkbox__label"
              htmlFor="comunicaciones"
            >
              Acepto la Política de Comunicaciones Comerciales
            </label>
            {formik.errors.comunicaciones && formik.touched.comunicaciones && (
              <div className="invalid-feedback">
                {formik.errors.comunicaciones}
              </div>
            )}
          </div>
          <a href="" className="mb-5">
            Aplican terminos y condiciones
          </a>
        </div>
        <button type="submit">
          <span>Cotiza aquí</span>
        </button>
      </form>
    </div>
  );
};
