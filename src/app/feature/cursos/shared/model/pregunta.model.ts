export interface Pregunta{
    idPregunta?: number
    texto: string,
    imagen: string,
    respuesta: string,
    opcion1: string,
    opcion2: string,
    opcion3: string,
    opcion4: string,
    estado?: boolean
}