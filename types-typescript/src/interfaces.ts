// Funcion para mostrar una fotografia
export {};

enum PhotoOrientation {
	Landscape,
	Portrait,
	Square,
	Panorama,
}

interface Picture {
	title: string;
	date: string;
	orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
	console.log(
		`[title: ${picture.title},
			date: ${picture.date},
			orientation: ${picture.orientation}]`
	);
}

let mypic = {
	title: "my title",
	date: "13/03",
	orientation: PhotoOrientation.Landscape,
};

showPicture(mypic);
showPicture({
	title: "my second title",
	date: "13/03/2002",
	orientation: PhotoOrientation.Portrait,
});

interface PictureConfig {
	title?: string;
	date?: string;
	orientation?: PhotoOrientation;
}

function generatePicture(conf: PictureConfig): object {
	const pic = { title: "", date: "" };
	if (conf.title) {
		pic.title = conf.title;
	}
	if (conf.date) {
		pic.date = conf.date;
	}
	return pic;
}

let picture = generatePicture({});
console.log(picture);

picture = generatePicture({ title: "Travel pic" });
console.log(picture);

picture = generatePicture({ title: "Travel picture", date: "13-03" });
console.log(picture);

// Interfaz Usuario
interface User {
	readonly id: number; // Slo lectura
	username: string;
	isPro: boolean;
}

let user: User;
user = { id: 10, username: "cbayonao", isPro: true };
console.log("user", user);
user.username = "paparazzi";
console.log("user", user);
// user.id = 20 // Error
// console.log("user", user);
