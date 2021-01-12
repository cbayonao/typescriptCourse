export {};

enum PhotoOrientation {
	Landscape,
	Portrait,
	Square,
	Panorama,
}

interface Entity {
	id: number;
	titulo: string;
}

interface Album extends Entity {
	// Copia de los atributos de Entity
	// id: number;
	// titulo: string;
	description: string;
}

interface Picture extends Entity {
	// Copia de los atributos de Entity
	// id: number;
	// titulo: string;
	orientation: PhotoOrientation;
}

const album: Album = {
	id: 1,
	titulo: "My album extends from entity",
	description: "La desripcion esta cool",
};

const picture: Picture = {
	id: 2,
	titulo: "My picture extends from entity",
	orientation: PhotoOrientation.Panorama,
};

let newPicture = {} as Picture;
newPicture.id = 1;
newPicture.titulo = "Moon";

console.log(album);
console.log(picture);
console.log(newPicture);
