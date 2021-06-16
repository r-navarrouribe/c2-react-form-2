import PropTypes from "prop-types";
import { useFormulario } from "../hooks/useFormulario";

export const Paso2 = (props) => {
  const { datosRegistro, setDatosRegistro, avanzaPaso, retrocedePaso } = props;
  const {
    datos: { username, password, repitePassword },
    datos,
    setDato,
  } = useFormulario(datosRegistro);
  const enviaPaso2 = (e) => {
    e.preventDefault();
    avanzaPaso();
    setDatosRegistro({ ...datos });
  };
  return (
    <>
      <h2>Paso 2: Datos de acceso</h2>
      <form noValidate onSubmit={enviaPaso2}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            value={username}
            onChange={setDato}
            className="form-control"
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={setDato}
            id="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="repitePassword">Repetir contraseña:</label>
          <input
            type="password"
            value={repitePassword}
            onChange={setDato}
            id="repitePassword"
            className="form-control"
          />
        </div>
        <button className="btn btn-info" onClick={retrocedePaso}>
          Anterior
        </button>
        <button type="submit" className="btn btn-info">
          Siguiente
        </button>
      </form>
    </>
  );
};

Paso2.propTypes = {
  avanzaPaso: PropTypes.func.isRequired,
  retrocedePaso: PropTypes.func.isRequired,
  datosRegistro: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    repitePassword: PropTypes.string.isRequired,
  }).isRequired,
  setDatosRegistro: PropTypes.func.isRequired,
};
