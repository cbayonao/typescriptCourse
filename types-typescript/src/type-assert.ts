// <tipo> // Angle Brackets syntax
export {};
let username: any;

username = "cbayonao";

// Tenemos una cadena, TS confia en mi!
let message: string;

// username es inicializado como any, por lo que no tiene los metodos y propiedades de str
// usando los Angle brackets he indicando el tipo para hacer referencia.
message =
	(<string>username).length > 5
		? `Welcome ${username}`
		: `Username is to short`;
console.log("message", message);

let usernameWithId: any = "cbayonao 1";

// Como obtener solo el username

username = (<string>usernameWithId).substring(0, 8);
console.log("usernameWithoutId", username);

// Sintaxis "as"

message =
	(username as string).length > 5
		? `Welcome ${username}`
		: `Username is to short`;
console.log("message", message);

let hellosUser: any;
hellosUser = "Hello paparazzi";
username = (hellosUser as string).substring(6);
console.log("username: ", username);
