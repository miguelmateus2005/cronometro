const $ = (elemento) =>{
  return document.querySelector(elemento);
}
const addZero = (a) =>{
  return String(a).padStart(2,"0");
}