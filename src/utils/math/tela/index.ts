import { mmToM } from "../.."
import type { IParamsCalculoTela } from "../../../models/params/IParamsCalculoTela"

export const calcularValorEstruturaTela = (altura: number, largura: number): number => {
  let valor = (((mmToM(altura) * 2) + (mmToM(largura) * 4)) * 20) + 20

  return Math.round(valor * 100) / 100
}

export const calcularValorTela = (largura: number): number => {
  let valor = mmToM(largura) * 17

  return Math.round(valor * 100) / 100
}

export const calcularValorFinalTela = (params: IParamsCalculoTela): number => {
  // let valorAluminio = calcularValorAluminioJanela(params.altura, params.largura, params.multiplicadorAltura, params.multiplicadorLargura)

  return 0
}