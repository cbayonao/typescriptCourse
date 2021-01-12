// Orientacion para fotografias

// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
	Landscape, // 1
	Portrait, // 2
	Square, // 3
	Panorama, // 4
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log("landscape: ", landscape);
console.log("landscape: ", PhotoOrientation[landscape]);

enum pictureOrientation {
	Landscape = 10,
	Portrait, // 11
	Square, // 12
	Panorama, // 13
}

enum pingunOrientation {
	Landscape, // 0
	Portrait = 4,
	Square, // 5
	Panorama, // 6
}

console.log(pingunOrientation.Landscape);
console.log(pingunOrientation.Square);

enum Paises {
	Bolivia = "Bo",
	Colombia = "Co",
	Mexico = "Me",
	Argentina = "Ar",
}

const pais: Paises = Paises.Colombia;
console.log(pais);
