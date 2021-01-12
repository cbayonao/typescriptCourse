export {};
// Crear una fotografia
type SquareSize = "100x100" | "500x500" | "1000x1000";

function createPicture(title: string, date: string, size: SquareSize): void {
	// Se crea la fotografia
	console.log("createPicture: ", title, date, size);
}

createPicture("onePicture", "13/03/1992", "500x500");

function createPictureOptional(
	title: string,
	date: string,
	size?: SquareSize
): void {
	// Se crea la fotografia
	console.log("createPicture: ", title, date, size);
}
createPictureOptional("onePicture", "13/03/1992");

// Flat array functions
let createPic = (title: string, date: string, size: SquareSize): object => {
	let myObj = {
		title: title,
		date: date,
		size: size,
	};
	// return myObj;
	// return {
	// 	title: title,
	// 	date: date,
	//     size: size,
	// }
	return { title, date, size };
};
let picture = createPic("Hola pic", "13-03", "100x100");

console.log("picture: ", picture);

// Se comentan solo los valores opcionales, pero nunca se comentaron los valores por defecto, les comparto un ejemplo

/**
 * Listado de propiedades de una foto
 *
 * @param   {string}      // title Nombre de la foto.
 * @param   {string}      // date Fecha en la que fue tomada.
 * @param   {SquareSize}  // size (Optional) Tamaño de la foto.
 *
 * @return  {object}
 */
const dataPicture = (
	title: string,
	date: string,
	size: SquareSize = "100x100"
): object => ({
	title,
	date,
	size,
});
// El ultimo parámetro size es opcional y siempre se tomara por defecto las medidas de 100x100

// Tipo de retorno con tyoescript
// Indicamos que va a retornar o un string o un never
function handleError(code: number, message: string): string | never {
	// Procesamiento del codigo o del mensaje
	if (message == "error") {
		throw new Error(`${message}. Code Error:${code}`);
	} else {
		return `An error ${code} has ocurred`;
	}
}

try {
	let result = handleError(200, "OK");
	console.log(result);
	result = handleError(400, "error");
	console.log(result);
} catch (error) {}
