// Explicita para Any

let idUser: any;

idUser = 1;
idUser = "1AF32";

console.log(idUser);

// Tipo inferido
let otherId;
otherId = 1;
otherId = "Sindysuela";
console.log(otherId);

let surprise: any = "hello typescript";
const res = surprise.substring(6);

console.log(res);
