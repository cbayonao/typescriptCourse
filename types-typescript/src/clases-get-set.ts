export {};

enum PhotoOrientation {
	Landscape,
	Portrait,
	Square,
	Panorama,
}

class Picture {
	// properties
	private _id: number;
	private _title: string;
	private _orientation: PhotoOrientation;
	//constructor
	public constructor(id: number, title: string, orientation: PhotoOrientation) {
		this._id = id;
		this._title = title;
		this._orientation = orientation;
	}
	//Performance
	private toString() {
		return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`;
	}
}

class Album {
	private _id: string;
	private _title: string;
	private _pictures: Picture[];

	public constructor(id: string, title: string) {
		this._id = id;
		this._title = title;
		this._pictures = [];
	}

	get id() {
		return this._id;
	}
	set id(id: string) {
		this._id = id;
	}

	get title() {
		return this._title;
	}
	set title(t: string) {
		this._title = t;
	}

	get picture() {
		return this._pictures;
	}
	set picture(pic: Picture[]) {
		this._pictures = pic;
	}

	public addPicture(picture: Picture) {
		this._pictures.push(picture);
	}
}

let album: Album = new Album("stories-1", "Photos of mine");

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
console.log("album -> ", album);
