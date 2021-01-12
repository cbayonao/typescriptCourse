export {};
// Void
// Tipo explicito
// Si se pone return infiere el tipo que tenga el return
// Si no se pone infiere un tipo any
function showInfo(user: any): any {
	console.log("userInfo", user.id, user.username, user.fullname);
	//return "hola";
}

showInfo({
	id: 1,
	username: "cbayona",
	fullname: "Camilo Bayona",
});

// Tipo inferido
function showFormatterInfo(user: any) {
	console.log(
		"User Info:",
		`
        id: ${user.id}
        username: ${user.username}
        fullname: ${user.fullname}
    `
	);
}

showFormatterInfo({
	id: 2,
	username: "hbayonap",
	fullname: "Hector Bayona",
});

// Tipo void como tipo de dato en una variable
let unused: void;
// Warning the strict true
// unused = null;
unused = undefined;

// Tipo Never
function handleError(code: number, message: string): never {
	// Process your code here.
	// Generate a message
	throw new Error(`${message}, Code: ${code}`);
}

try {
	handleError(404, "Not Found");
} catch (error) {}

// Ciclo infinito, programa nunca termina
function sumNumbers(limite: number): never {
	let sum = 0;
	while (true) {
		sum++;
	}
}
