let persona = { nombre: "Iryna", edad: 28 };
console.log(persona);

let altura = 177;
let personaExtendido = {
    ...persona,
    altura: true
}
console.log(personaExtendido);