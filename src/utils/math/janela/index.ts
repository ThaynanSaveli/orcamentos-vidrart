import { calcularValorPC, mmToM } from "../.."
import type { IParamsCalculoJanela } from "../../../models/params/IParamsCalculoJanela"

export const calcularValorVidroJanela = (altura: number, largura: number, constanteCalculoVidro: number, custoVidro: number): number => {
  let valor = (mmToM(largura + constanteCalculoVidro)) * mmToM(altura) * custoVidro
  return Math.round(valor * 100) / 100
}

export const calcularValorAluminioJanela = (altura: number, largura: number, multiplicadorAltura: number, multiplicadorLargura: number): number => {
  let valor = ((mmToM(altura) * multiplicadorAltura) + (mmToM(largura) * multiplicadorLargura))
  return Math.round(valor * 100) / 100
}

export const calcularTributacaoJanela = (valorAluminio: number, valorFerragem: number, valorMaoDeObra: number, valorVidro: number, valorPc: number): number => {
  let valor = (valorAluminio + valorFerragem + valorMaoDeObra + valorVidro + valorPc) * 0.06

  return Math.round(valor * 100) / 100
}

export const calcularValorFinalJanela = (params: IParamsCalculoJanela): number => {
  let valorAluminio = calcularValorAluminioJanela(params.altura, params.largura, params.multiplicadorAltura, params.multiplicadorLargura)
  let valorVidro = calcularValorVidroJanela(params.altura, params.largura, params.constanteCalculoVidro, params.custoVidro)
  let valorPc = calcularValorPC(params.valorPc)
  let valorTributos = calcularTributacaoJanela(valorAluminio, params.valorFerragem, params.maoDeObra, valorVidro, valorPc)
  let somaTotal = valorAluminio + valorVidro + valorPc + valorTributos + params.valorFerragem + params.maoDeObra + params.valorDeslocamento

  return Math.ceil(somaTotal)
}