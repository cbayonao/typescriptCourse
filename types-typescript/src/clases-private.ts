export {};

enum PhotoOrientation {
	Landscape,
	Portrait,
	Square,
	Panorama,
}

class Picture {
	private id: number;
	private title: string;
	private orientation: PhotoOrientation;

	public constructor(id: number, title: string, orientation: PhotoOrientation) {
		this.id = id;
		this.title = title;
		this.orientation = orientation;
	}

	// Comportamiento
	public toString() {
		return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`;
	}
}

class Album {
	private id: number;
	private title: string;
	private pictures: Picture[];
	private description: string;

	public constructor(id: number, title: string, description: string) {
		this.id = id;
		this.title = title;
		this.pictures = [];
		this.description = description;
	}

	// Comportamiento
	public addPicture(picture: Picture) {
		this.pictures.push(picture);
	}

	public toString() {
		return `[id: ${this.id},
                title: ${this.title},
                pictures: ${this.pictures}
                description: ${this.description}]`;
	}
}

const album: Album = new Album(
	1,
	"Album familiar",
	"Este album es para guardar cosas familiares"
);
console.log("album: ", album);
const picture: Picture = new Picture(
	1,
	"Foto con mi papa",
	PhotoOrientation.Panorama
);
album.addPicture(picture);
console.log("album: ", album);

// El acceso al estado de nuestras variables es publico.
// picture.id = 100; // private // error
// picture.title = "Another title"; // private // error
// album.title = "Personal activities"; // error
// console.log("picture: ", picture);
// console.log("album: ", album);
