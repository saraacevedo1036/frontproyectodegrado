import { Pregunta } from "./pregunta.model"
import { Reto } from "./reto.model"

export interface CreacionReto{
    reto: Reto
    listaPreguntas: Pregunta[]
}