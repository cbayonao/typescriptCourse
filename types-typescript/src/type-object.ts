//Type object

let user: object;
user = {}; //object

user = {
	id: 1,
	username: "Paparazzi",
	firstName: "Pablo",
	isPro: true,
};

console.log("user", user);

// Object vs object(Clase JS vs Tipo TS)
const myObj = {
	id: 1,
	username: "Paparazzi",
	firstName: "Pablo",
	isPro: true,
};

const isInstance = myObj instanceof Object; // clase Object de Javascript

console.log(isInstance);

console.log("myObj", myObj.username);
// >> true
// >> myObj Paparazzi
