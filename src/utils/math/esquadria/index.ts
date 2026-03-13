import type { IParamsCalculoEsquadria } from "../../../models/params/IParamsCalculoEsquadria"

export const calcularPrecoEsquadria = (altura: number, largura: number, constanteCalculo: number): number => {
  let valor = altura * largura * constanteCalculo * 0.000001
  return Math.round(valor * 100) / 100
}

export const calcularValorFinalEsquadria = (params: IParamsCalculoEsquadria): number => {
  let valorEstrutura = calcularPrecoEsquadria(params.altura, params.largura, params.constanteCalculo)
  let somaTotal = valorEstrutura + params.acrescimo + params.deslocamento

  return Math.ceil(somaTotal)
}