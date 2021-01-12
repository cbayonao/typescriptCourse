console.log("Hola typoCamilo!!");

// Number
// Explicita
let phone: number;
phone = 54234567;

// Inferido
let phoneNumber = 31233;

// Numeros hex, bin, oct
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o12345;

// Valore boolean
let isPro: boolean = true;
let isAdmin: boolean = false;

// Strings
// Explicito
let username: string = "CamiloBayona";
username = "Hector";

// Template string
//uso de back-tick `

let userinfo: string = `
    User info:
    username: ${username}
    fullname: ${username + " Bayona"}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log("userinfo", userinfo);
