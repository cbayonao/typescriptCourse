# Instalación de TypeScript

Con el siguiente comando lo instalaremos de manera global:

`npm install -g typescript`
Consultar la versión del compilador de TS:
`tsc -v`
Compilar nuestros ficheros .ts
tsc your_file.ts
Compilar de manera ‘automática’ nuestros ficheros .ts
`tsc --watch your_file.ts`
No hay que tenerle miedo al TypeScript, ya que este nos creará un archivo: your_file.js.
Es decir un archivo .js compatible con todo.

Gracias por la explicación profesor.

Si no quisieran instalar typescript de manera global, pueden ejecutar:

`npx tsc file.ts`

`npx tsc --watch file.ts`

### El archivo de configuración de TypeScript

Para ver todas las configuraciónes que tiene el compilador recomiendo ampliamente que revise la documentación donde detallan para qué sirve cada cosa, sera un buen complemento para el curso.

[TSCONFIG](https://www.typescriptlang.org/tsconfig)

## Archivo de configuracion

Especifica la raiz de un proyecto typescript.

Permite configurar opciones para el compilador

#### Generacion del archivo tsconfig.json

`tsc --init`

Crea un objeto json con el valor principal compilerOptions, que tiene llaves como: 1. Target el cual indica la version de EcmaScript que se genera como resultado de la compilacion. 2. module se especifica la configuracion para genereacion de modulos en nuestro proyecto 3. strict True o False, verifica de manera estricta los tipos en el proyecto de ts. 4. removeComments Boolean elimina comentarios en el proceso de compilacion.
Otro valor que recibe el objeto es include, una lista de declaraciones de tipo que se van a incluir en el proceso de compilacion. Es decir indica que directorio o directorios van a hacer parte de los archivos procesados por el compilador.

Exclude nos sirve para excluir directorios y ficheros delproceso de compilacion.

EL parametro extends recibe un string que nos permite extender la configuracion de otro archivo incuyendo su ruta

compileOnSave Boolean que indica que quremos que el editor ejecute la tarea de compilacion de manera automatica en nuestros archivos.

`tsc` busca de forma implicita los archivos dentro del proyecto para compilarlos

`tsc --project platzi` Especifica un directorio que contiene la configuracion.

`tsc file.ts` Omite la configuracion

## Mi primer proyecto TypeScript

## Tipado en TS:

Explícito: Se define explícitamente una sintaxis (el orden, la formación y la combinación de las reglas) del tipo de la variables a usar.

```
miVariableExplicita : string = 'Esta variable es explícita' // el `:` permite especificar el tipo del dato
Inferido: TS tiene la habilidad de deducir el tipo de variable que se usa a partir del valor asignado a dicha variable
```

```
miVariableInferida = "Esta variable será un string"  // TS deduce el tipo de miVariableInferida y el valor, a partir de la inicialización de la misma
```

Tipos de datos primitivos:

- Number
- Boolean
- String
- Array
- Tuple
- Enum
- Any
- Void
- Null
- Undefined
- Never
- Object

## Number, Boolean y String

#### Number

El tipo Number nos permite declarar valores: numericos, hexadecimales, binarios, octales

#### String

Tipo de dato paar tarbajar con datos textuales o cadenas
Asi como en JS se pueden usar comillas dobles o simples.

#### Boolean

Es el tipo mas sencillo en typescript
Solo admite true o false

## Any Void y Never

#### Any:

Usado para capturar valores dinamicos
Los valores pueden cambiar de tipo en el tiempo - API's externas - Librerias de terceros

#### Void:

Es lo opuesto de any:
representa la ausencia de tipo

Comunmente se usa como tipo de retorno de funciones
Tipo Void: Representa la ausencia de tipo. usado en funciones que no retornan nada.

```
let unused: void;
// Warning the strict true
// unused = null;
unused = undefined;
```

#### Never

Representa el tipo de valor que _nunca_ ocurre

- Funciones que lanzan execpciones
- Funciones que nunca retornan un valor

### Never vs. Void

Tipo Never: Representa funciones que lanzan excepciones o nunca retornan un valor.

El detalle está en que las funciones tipo void realizan algo y terminan su flujo (sentencias, instrucciones…), por defecto al no retorna nada (ningún dato) devuelven undefined (pero terminan y devuelven algo). En cambio las tipo never son las que nunca retornar, se podría ver como que no terminan sus instrucciones, por ello los ejemplos son lanzando una excepción (que por definición interrumpe la ejecución normal del código) y generando un bucle infinito.
Esa es la gran diferencia entre void y never, la primera termina su código pero no retorna datos, la otra no termina y, por ende, nunca retorna.
never en TypeScript es muy útil precisamente para manejo de errores como se comentó en el ejemplo

#### null y undefined

En typescript ambos "Valores" tienen sus respectivos tipos:

- null
- undefined

// ------------------ NULL ------------------
// Explicita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // --> Error

// Inferido
let otherVariable = null; // --> any
otherVariable = 'test';

console.log('nullVariable : ', nullVariable);
console.log('otherVariable : ', otherVariable);

// ----------------- UNDEFINED -----------------
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // --> Error

let otherUndefined = undefined; // --> any
otherUndefined = 1;

console.log('undefinedVariable : ', undefinedVariable);
console.log('otherUndefined : ', otherUndefined);

// ------- NULL y UNDEFINED: como subtipos -------

/\*

- tsc --watch src/type-null-undefined.ts --strictNullChecks
- Podemos ver las lineas del flag --strictNullChecks: para ver el numero de linea del error
- Archivo tsconfig.json "strictNullChecks": true
  \*/
  let albumName: string;
  // albumName = null;
  // albumName = undefined;

### Tipo Object

- object es el tipo de datos que representa un valor no primitivo.
- Es el tipo para variable que no sea number, string, boolean, null o undefined

### Array

Al igual que javascript permite definir un arreglo para contener un conjunto de valores
Usa dos notaciones: [] y Array<tipo>

### Tuplas

Las tuplas permiten expresar un arreglo con un numero fijo de elementos
los tipos de datos son conocidos

### Enum

Los enumerados permiten definir un conjunto de constantes con nombre
Tienen la ventaja de adaptarse al contexto de la aplicacion

Buscando algún ejemplo más sobre unir o extender en enum, he encontrado esta:

```
enum DiasLaborales {
  Lunes = 'MON',
  Martes = 'TUE',
  Miercoles = 'WED',
  Jueves = 'THU',
  Viernes = 'FRI'
}

enum DiasFinSemana {
  Sabado = 'SAT',
  Domingo = 'SUN'
}

const Semana = {
  ...DiasLaborales,
  ...DiasFinSemana
}

console.log(Semana.Lunes); // MON
console.log(Semana.Sabado); // SAT
```

### Unión de Tipos, Alias y Tipos Literales

##### Union de tipos:

En typescript se puede definir una variable con multiples tipos de datos: Union Type
Se usa el simbolo de pipe ('|')

##### Alias de tipos

Typescript permite crear un alias como nuevo nombre para un tipo.
En alias se puede aplicar tambien a un conjunto o combinacion de tipos.
Se usa la plabra reservada type.

##### Tipos Literales

Una variable con un tipo literal puede contener unicamente una cadena del conjunto.
Se usan cadenas como "tipos"

## Aserciones de tipo

Cuando el programador puede conocer mas que typescript sobre el valor de una variable.
Es un mensaje al compilador: confia en mi se lo que hago.

Se parece al casting de tipos en otros lenguajes de programacion

Usa dos sintaxis: <Angle Bracket> y variable as tipo

```
username = (<string>usernameWithId).substring(0, 8);
console.log("usernameWithoutId", username);

// Sintaxis "as"

message =
	(username as string).length > 5
```

## Funciones en TypeScript

- Los parametros en las funciones son tipados
- Se pueden definir parametros opcionales
- El tipo de retorno puede ser de tipo basico, enum, alias, tipo literal o una combinacion de ellas

## Interfaces

Las interfaces en typescript constituyen un aforma poderosa de definir 'contratos' tanto para su proyecto, como para el codigo externo del mismo.

##### Pro tip

Impriman object literals en la consola para tener todo bien mostrado desde la consola

`console.log({ picture });`

{ picture: { title: 'New year', date: '02/07/1980', orientation: 1 } }

_Cuando defines un objeto por ejemplo:_

```
let obj = {
    user: "Heli",
    pwd: "1345"
};
```

Typescript crea una interface anónima con los tipos de los objetos y es posible castearlo a una interface definida

```
interface ObjInterface {
    user:string;
    pwd:string;
}
```

```
let obj = {
    user: "Heli",
    pwd: "1345"
};
```

```
let obj2 = obj as ObjInterface;

console.log(obj["user"]);
```

##### Interfaces con propiedades Opcionales

No todas las propiedades de una interfaz son requeridas.
Establecesmos una propiedad como opcional con el simbolo(?) despues del nombre.

Propiedades opcionales : No todas las propiedades de una interfaz podrian ser requeridas. Usamos el simbolo ‘?’ luego del nombre de la propiedad.

```
interface PictureConfig {
	title: string;
	date?: string;
	orientation: PhotoOrientation
}
```

Propiedades de solo lectura: Algunas propiedades de la interfaz podrian no ser modificables una vez creado el objeto. Esto es posible usando readonly antes del nombre de la propiedad.

```
interface User {
	readonly id: number;
	username: string;
	readonly isPro:boolean;
}
```

### Extensión de interfaces

Las interaces pueden extenderse unas de otras, Estos permite copiar los miembros ya definidos en una interfaz a otra ganando flexibilidad y reusabilidad de los componentes.

Extendiendo Interfaces. Las interfaces pueden extenderse unas de otras. Esto permite copiar los miembros ya definidos en una interfaz a otra, ganando flexibilidad y reusabilidad de componentes.
Utilizamos la palabra reservada extends para utilizar herencia.

```
interface Person {
  name:string;
  lastname:string;
}
interface Student extends Person {
  person:Person
}
```

### Clases

Definiendo clases y constructores a partir de EcmaScript2015 es posible constrir clases y hacer uso del paradigma de la programacion orientada a objetos en JS.

TypeScript permite aplicar estas tecnicas sin tener q esperar a otra version.

Las clases y a la POO, se puede conectar las diferentes entidades y se puede relacionar
Una clase es la asbtracción de un conjunto de objetos
ejemplo:
Para definir una entidad usuario, se hace uso de una clase: Se debe definir una clase que
dentro tenga una función que permita crear objetos a partir de esta Clase y poder interactuar con ellos.

```
export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
};

class Picture {
    // properties
    id: number;
    title: string;
    orientation: PhotoOrientation;
    //constructor
    constructor( id: number, title: string, orientation: PhotoOrientation ) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //Performance
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
    }
}

class Album {
    id: string;
    title: string;
    pictures: Picture[];

    constructor( id: string, title: string ) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

let album: Album = new Album('stories-1', 'Photos of mine');
const newPic: Picture = new Picture(2, 'my new pic!', PhotoOrientation.Panorama);
const new2Pic: Picture = new Picture(3, 'my 2nd new pic!', PhotoOrientation.Portrait);
const new3Pic: Picture = new Picture(4, 'my 3rd new pic!', PhotoOrientation.Portrait);
album.addPicture(newPic);
album.addPicture(new2Pic);
album.addPicture(new3Pic);
console.log('album -> ', album);
```

### Clases públicas y privadas

##### Clases Miembros Publicos

Typescript tiene un modificador de acceso publico por defecto para los miembros de la clase.
Tambien es posible marcar un miembro como publico usando la palabra reservada **public**

Clases - miembros públicos: define un modificador de acceso publico por defecto para los miembros de la clase. También es posible marcar un miembro como publico usando la palabra reservada public
Clases - miembros privados: define una manera propia de declarar o marcar un miembro como privado usando la palabra reservada private

```
class Person{
	private id:number;
	private name: string;
	public constructor(){}
	public getName(){
		return this.name
	}
}
```

##### Clases Miembros privados

Typescript define una manerapropia de declarar o marcar a un miembro como privado usando la palabra reservada **private**.
Miembros privados ECMAScript: soporta (a partir de la versión 3.8) la nueva sintaxis JavaScript para miembros privados: #atributo. Esta caracteristica puede ofrecer mejores garantias de aislamiento en miembros privados

```
class Person{
	#id:number;
	#name: string;
	public constructor(){}
	public getName(){
		return this.#name
	}
}
```

Para que VSCode no nos tire errores por usar esta sintaxis, instalar JavaScript and TypeScript Nightly

Usar la sintaxis # para miembros privados es mejor porque nos garantiza encapsular nuestros miembros privados. a diferencia de usar private

### Métodos Get y Set

##### Clases: Metodos set y get

Typescript soporta metodos accesores set y get como una forma de interceptar los accesos a los miembros privados de un objeto.

Esto le da una forma de tener un control más fino sobre cómo se accede a un miembro en cada objeto.

Convirtamos una clase simple para usar get y set. Primero, empecemos con un ejemplo sin getters y setters.

```
class Employee {
  fullName: string;
}

let employee = new Employee();
employee.fullName = "Bob Smith";

if (employee.fullName) {
  console.log(employee.fullName);
}
```

Aunque permitir que la gente establezca directamente el nombre completo al azar es bastante útil, también podemos querer imponer algunas restricciones cuando se establece el nombre completo.

En esta versión, añadimos un configurador que comprueba la longitud del nuevo Nombre para asegurarse de que es compatible con la longitud máxima de nuestro campo de base de datos de respaldo. Si no lo es, arrojamos un error notificando al código del cliente que algo salió mal.

Para preservar la funcionalidad existente, también añadimos un simple programa que recupera el nombre completo sin modificar.

```
const fullNameMaxLength = 10;

class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }

    this._fullName = newName;
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";

if (employee.fullName) {
  console.log(employee.fullName);
}
```

Para probarnos a nosotros mismos que nuestro accesorio está comprobando ahora la longitud de los valores, podemos intentar asignar un nombre de más de 10 caracteres y verificar que obtenemos un error.

Un par de cosas a tener en cuenta sobre los accesorios:

Primero, los accessores requieren que el compilador dé como resultado ECMAScript 5 o superior. La bajada de nivel a ECMAScript 3 no está soportada. Segundo, los accesorios con un get y sin set se infieren automáticamente para ser de solo lectura. Esto es útil cuando se genera un archivo.d.ts a partir de su código, porque los usuarios de su propiedad pueden ver que no pueden cambiarlo.

### Herencia de clases y propiedades estáticas

##### Herencia de clases y miembros protegidos

Typescript soporta este patron comun en el mundo de la POO, implementa la habilidad de extender codigo de clases existentes a traves de la herencia.
_Clases Abstractas:_
Las clases abstractas son la base de donde otras clases podrian derivarse. a diferencia de una interfaz una clase abstracta puede implementar funciones para sus instancias.
La palabra reservada es: _abstract_: cuando requieres que una clase no sea instanciada.

_protected_: atributo de los miembros para que puedan ser accedidos desde su propia clase y también que puedan ser solo accedidos a quienes heredan esa clase con implements(herencia).
_implements_: herencia claseA extends claseB { … }

_Propiedades estaticas_
Las clases por lo general definen atributos y metodos aplicables a las instancias de las mismas.
A traves de la palabra reservada static se puede definir un miembro visible a nivel de clase.
_static_: para poder acceder a métodos/propiedades de una clase sin la necesidad de la instancia(new ClaseA()) sino const a = ClaseA.propiedad

_propiedades de solo lectura_
Al igual que las interfaces, podemos usar la palabra reservada readonly para marcar el miembro de una clase como solo lectura.

### Modulos en typescript

Los modulos en typescript proveen un mecanismo para una mejor organizacion del codigo y promueven su reutilizacion.

A partir de ECMAScript2015, los modulos son parte nativa del lenguaje javascript

### Principios de responsabilidad única

Idealmente, un archivo deberia tener un prposito o responsabilidad unica: definir una clase, una interfaz, un enumerado, etc.

Esto mejora la legibilidad de codigo, facilita su lectura, testing y favorece su mantenimiento.

### Resolviendo módulos

Typescript resuelve la ubicacion de modulos observando referencias relativas o no relativas.
Posteriormente intenta localizar el modulo usando la estrategia de resolucion de modulos.

##### Estrategia de resolucion de modulos

`$ tsc --moduleResolution node`
`$ tsc --moduleResolution classic`

_Diferencias_
_node_: Modulos CommonJs o UMD, mas opciones de configuración
_classic_: Modulos AMD, System, ES2015, poco configurable en tsconfig.json

```
"moduleResolution": "node|classic"
"traceResolution":true
```

**Classic: Import Relativo**
// Archivo: /typescript/photo-app/main.ts
import { Picture } from './picture';

El compilador procede a buscar un archivo con la extension .ts
/typescript/photo-app/picture.ts
Si no lo encuentra buscaria uno con la extension .d.ts
/typescript/photo-app/picture.d.ts

**Classic: Import No-Relativo**
// Archivo: /typescript/photo-app/main.ts
import { Picture } from 'picture';

El compilador procede a buscar un archivo con la extension .ts
`/typescript/photo-app/picture.ts`
Si no lo encuentra buscaria uno con la extension .d.ts
`/typescript/photo-app/picture.d.ts`
Si no lo encuentra continua buscando en el arbol de directorios
`/typescript/picture.ts`
`/typescript/picture.d.ts`

**Node: Import Relativo**
// Archivo: /typescript/photo-app/main.ts
import { Picture } from './picture';

`/typescript/photo-app/picture.ts`
`/typescript/photo-app/picture.tsx`
`/typescript/photo-app/picture.d.ts`

package.json ("Typings")

`/typescript/photo-app/picture/index.ts`
`/typescript/photo-app/picture/index.tsx`
`/typescript/photo-app/picture/index.d.ts`

**Node: Import No-Relativo**
// Archivo: /typescript/photo-app/main.ts
import { Picture } from 'picture';

Lo busca en el node_modules por que supone que es una libreria o modulo externo instalado
`/typescript/photo-app/node-modules/picture.ts`
`/typescript/photo-app/node-modules/picture.tsx`
`/typescript/photo-app/node-modules/picture.d.ts`
package.json ("Typings")
`/typescript/photo-app/node-modules/index.ts`

`/typescript/node-modules/picture.ts`
`/typescript/node-modules/picture.tsx`
`/typescript/node-modules/picture.d.ts`
package.json ("Typings")
`/typescript/node-modules/index.ts`

(Continua buscando en el arbol de directorios)

### Webpack y agrupación de Módulos

- Agregando el archivo package.json
  `npm init -y`
- Instalacion de typescript y Webpack
  `$ npm install typescript webpack webpack-cli --save-dev`
