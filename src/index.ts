import { IUser } from "./interfaces/IUser";

// ? => não espera receber valor no parâmetro
// ! => garante que o valor existe no parâmetro

const person: IUser = {
  firstName: "Herlon",
  lastName: "Costa",
  fullName () {
    return `${this.firstName} ${this.lastName}`
  },
  address: {
    address: "Rua do Norte",
    number: 45
  }
}

console.log(person.fullName());
console.log(person);

// Operador de Coalescência Nula
console.log(null ?? 40);

// any
let variavel; // implicity any
// let variavel: any;

variavel = "qualquer coisa";
variavel = 10;

// function somar(a, b) { // any implícito não permitido
//   return a + b;
// }

function somar(a: number, b: number): number {
  return a + b;
}

console.log(somar(10, 20));
