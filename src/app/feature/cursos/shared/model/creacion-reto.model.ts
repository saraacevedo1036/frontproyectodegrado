import { Reto } from "src/app/shared/model/reto.model"
import { Pregunta } from "./pregunta.model"

export interface CreacionReto{
    reto: Reto
    listaPreguntas: Pregunta[]
}