export {};

// [1, 'Camilo']
let user: [number, string];
user = [1, "Camilo"];

console.log("user", user);
console.log("username", user[1]);
console.log("username.length", user[1].length);
console.log("id", user[0]);

// Tuplas con varios valores
// id, username, isPro

let userInfo: [number, string, boolean];
userInfo = [2, "Paparazzi", true];
console.log("userInfo", userInfo);

// Arreglo de tuplas
let preparaciones: [number, string][] = [];
preparaciones.push([1, "Trucha a la Marinera"]);
preparaciones.push([2, "Trucha al Ajillo"]);
preparaciones.push([3, "Trucha a las finas hierbas"]);
preparaciones.push([4, "Trucha al roquefort"]);

console.log("preparaciones", preparaciones);

// Uso de funciones Array
// Trucha al roquefort -> Trucha a la mandarina

preparaciones[3][1] = preparaciones[3][1].replace(
	"al roquefort",
	"a la mandarina"
);

console.log("preparaciones", preparaciones);
