import { User } from "./user";
import { Album } from "./album";
import { Picture } from "./picture";
import { PhotoOrientation } from "./photo-orientation";

const user = new User(1, "cbayonao", "camilo", true);
const album = new Album(1, "Mi nuevo album");
const picture = new Picture(
	1,
	"Mi first pic",
	"13-03",
	PhotoOrientation.Portrait
);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log("User: ", user);
// Borramos album
user.removeAlbum(album);
console.log("User: ", user);
