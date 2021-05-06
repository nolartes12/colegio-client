import { Acudiente } from "./acudiente";
import { Matricula } from "./matricula";

export class Estudiante {
    id!: number;
    nombre!: string;
    email!: string;
    edad!: number;
    activo!: boolean;
    sexo!: string;
    acudiente?: Acudiente;
    matricula?: Matricula;
}