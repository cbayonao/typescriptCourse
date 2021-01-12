export {};

enum PhotoOrientation {
	Landscape,
	Portrait,
	Square,
	Panorama,
}

// SUPERclase

abstract class Item {
	protected readonly _id: number;
	protected _title: string;
	constructor(id: number, title: string) {
		this._id = id;
		this._title = title;
	}

	get id() {
		return this._id;
	}
	// set id(id: number) {
	// 	this._id = id;
	// }
	get title() {
		return this._title;
	}
	set title(title: string) {
		this._title = title;
	}
}

class Picture extends Item {
	public static photoOrientation = PhotoOrientation;
	// properties
	// private _id: number;
	// private _title: string;
	private _orientation: PhotoOrientation;
	//constructor
	public constructor(id: number, title: string, orientation: PhotoOrientation) {
		super(id, title);
		this._orientation = orientation;
	}

	get orientation() {
		return this._orientation;
	}

	set orientation(orientation: PhotoOrientation) {
		this._orientation = orientation;
	}

	//Performance
	private toString() {
		return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`;
	}
}

class Album extends Item {
	// private _id: string;
	// private _title: string;
	private _pictures: Picture[];

	public constructor(id: number, title: string) {
		super(id, title);
		this._pictures = [];
	}

	get pictures() {
		return this._pictures;
	}

	set pictures(pic: Picture[]) {
		this._pictures = pic;
	}

	public addPicture(picture: Picture) {
		this._pictures.push(picture);
	}
}

let album: Album = new Album(1, "Photos of mine");

const newPic: Picture = new Picture(
	2,
	"my new pic!",
	PhotoOrientation.Panorama
);
const new2Pic: Picture = new Picture(
	3,
	"my 2nd new pic!",
	PhotoOrientation.Portrait
);
const new3Pic: Picture = new Picture(
	4,
	"my 3rd new pic!",
	PhotoOrientation.Portrait
);
album.addPicture(newPic);
album.addPicture(new2Pic);
album.addPicture(new3Pic);
console.log("album: ", album);

// const item = new Item(1, "titulo del item"); // Error
// console.log(item);
// Probando el acceso a miembros estaticos de la clase picture
console.log("PhotoOrientation", Picture.photoOrientation.Square);
