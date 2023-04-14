import { enviarFormulario } from "./service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  const tel = document.querySelector("[data-tel]").value;
  const asunto = document.querySelector("[data-asunto]").value;
  const mensaje = document.querySelector("[data-mensaje]").value;
  enviarFormulario.crearFormulario(nombre, email, tel, asunto, mensaje).then(respuesta => console.log(respuesta)).catch((err) => console.log(err));
});

