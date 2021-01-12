// 10, '10'
export {};

// let idUser: number | string;

// idUser = 10;
// idUser = "10";

// // Buscar un username  dado un ID
// function getUsernameByID(id: string | number) {
// 	// Logica de negocio
// 	return "username";
// }

// getUsernameByID(2);
// getUsernameByID("cam1");

// Alias de tipo: TS
type numstr = number | string;
type username = string;
let idUser: numstr;

idUser = 10;
idUser = "10";

// Buscar un username  dado un ID
function getUsernameByID(id: numstr): username {
	// Logica de negocio
	return "username";
}

getUsernameByID(2);
getUsernameByID("cam1");

// Tipos Literales
// 100x100, 500x500, 1000 x 1000

type squareSize = "100x100" | "500x500" | "1000x1000";

// let small_picture: squareSize = '200x200' // Error
let small_picture: squareSize = "100x100";
let medium_picture: squareSize = "500x500";
let big_picture: squareSize = "1000x1000";
