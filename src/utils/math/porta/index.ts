import { calcularValorPC, mmToM } from "../.."
import type { IParamsCalculoPortaCorrer } from "../../../models/params/IParamsCalculoPortaCorrer"

export const calcularValorAluminioPortaCorrer = (altura: number, largura: number, constanteMultiplicadora: number, multiplicadorAltura: number, multiplicadorLargura: number): number => {
  let valor = (((mmToM(altura) * constanteMultiplicadora) * multiplicadorAltura) + (mmToM(largura) * multiplicadorLargura))
  return Math.round(valor * 100) / 100
}

export const calcularValorVidroPortaCorrer = (altura: number, largura: number, constanteSomadoraAltura: number, constanteSomadoraLargura: number, custoVidro: number): number => {
  let valor = (mmToM(largura + constanteSomadoraLargura)) * mmToM(altura + constanteSomadoraAltura) * custoVidro
  return Math.round(valor * 100) / 100
}

export const calcularValorPainel = (largura: number, larguraPainel: number): number => {
  let valor = (mmToM(largura)) * mmToM(larguraPainel) * 180
  return Math.round(valor * 100) / 100
}

export const calcularTributacaoPortaCorrer = (valorAluminio: number, valorFerragem: number, valorVidro: number, valorMaoDeObra: number, valorPc: number, valorPlotagem: number, valorPainel: number): number => {
  let valor = (valorAluminio + valorFerragem + valorVidro + valorMaoDeObra + valorPc + valorPlotagem + valorPainel) * 0.06

  return Math.round(valor * 100) / 100
}

export const calcularValorFinalPortaCorrer = (params: IParamsCalculoPortaCorrer): number => {
  let valorAluminio = calcularValorAluminioPortaCorrer(params.altura, params.largura, params.constanteMultiplicadora ,params.multiplicadorAltura, params.multiplicadorLargura)
  let valorVidro = calcularValorVidroPortaCorrer(params.altura, params.largura, params.constanteSomadoraAltura, params.constanteSomadoraLargura, params.custoVidro)
  let valorPc = calcularValorPC(params.valorPc)
  let valorPainel = calcularValorPainel(params.largura, params.valorPainel)
  let valorPlotagem = Math.round(params.valorPlotagem * 100) / 100
  let valorTributos = calcularTributacaoPortaCorrer(valorAluminio, params.valorFerragem, params.maoDeObra, valorVidro, valorPc, valorPlotagem, valorPainel)
  let somaTotal = valorAluminio + valorVidro + valorPc + valorTributos + params.valorFerragem + params.maoDeObra + params.valorDeslocamento

  return Math.ceil(somaTotal)
}