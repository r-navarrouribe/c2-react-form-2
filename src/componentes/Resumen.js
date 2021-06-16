import PropTypes from "prop-types";

export const Resumen = (props) => {
  const { retrocedePaso, datosPersonales, datosRegistro, datosAcceso } = props;
  return (
    <>
      <h2>Resumen</h2>
      <ul className="list-unstyled">
        <li>Nombre: {datosPersonales.nombre}</li>
        <li>Apellitos: {datosPersonales.apellidos}</li>
        <li>Fecha de nacimiento: {datosPersonales.fechaNacimiento}</li>
        <li>Email: {datosPersonales.email}</li>
        <li>Username: {datosRegistro.username}</li>
        <li>Password: {datosRegistro.password}</li>
        <li>
          Recordar contraseña: {datosAcceso.recordarPassword ? "Sí" : "No"}
        </li>
      </ul>
      <button className="btn btn-info" onClick={retrocedePaso}>
        Anterior
      </button>
    </>
  );
};

Resumen.propTypes = {
  retrocedePaso: PropTypes.func.isRequired,
  datosPersonales: PropTypes.object.isRequired,
  datosRegistro: PropTypes.object.isRequired,
  datosAcceso: PropTypes.object.isRequired,
};
