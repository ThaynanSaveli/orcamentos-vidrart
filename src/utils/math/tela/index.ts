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

export const calcularTributacaoTela = (valorEstrutura: number, valorTela: number, valorMaoDeObra: number): number => {
  let valor = (valorEstrutura + valorTela + valorMaoDeObra) * 0.06

  return Math.round(valor * 100) / 100
}

export const calcularValorFinalTela = (params: IParamsCalculoTela): number => {
  let valorEstrutura = calcularValorEstruturaTela(params.altura, params.largura)
  let valorTela = calcularValorTela(params.largura)
  let valorTributos = calcularTributacaoTela(valorEstrutura, valorTela, params.maoDeObra)
  let somaTotal = valorEstrutura + valorTela + valorTributos + params.maoDeObra + params.valorDeslocamento

  return Math.ceil(somaTotal)
}