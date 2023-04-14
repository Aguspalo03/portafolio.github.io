const listaFormularios = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearFormulario = (nombre, email, tel, asunto, mensaje) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, tel, asunto, mensaje}),
  });
};


export const enviarFormulario = {
  listaFormularios,
  crearFormulario,
};



