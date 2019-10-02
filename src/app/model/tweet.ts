import { Autor } from './autor';

export class Tweet {
    autor: Autor;
    titulo: string;
    descripcion: string;
    fecha: Date;

    constructor(autor?:Autor, descripcion?:string){
        this.autor=autor;
        this.descripcion=descripcion;
        this.fecha= new Date();
    }
}
