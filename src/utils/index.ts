export const calcularValorAluminioJanelaEPorta = (altura: number, largura: number, multiplicadorAltura: number, multiplicadorLargura: number): number => {
  let valor = (((altura * 0.001) * multiplicadorAltura) + ((largura * 0.001) * multiplicadorLargura))
  return Math.round(valor * 100) / 100
}

export const calcularValorVidro = (altura: number, largura: number, valorVidro: number, idVidroSelecionado: number, idGrupoSelecionado: number): number => {
  let constSomadora = 50
  let valor = 0

  if ((idGrupoSelecionado === 8 && idVidroSelecionado === 2) || (idGrupoSelecionado === 8 && idVidroSelecionado === 5)) {
    constSomadora = 200
  } else if (idGrupoSelecionado === 9 || idGrupoSelecionado === 8 || idGrupoSelecionado === 7 || idGrupoSelecionado === 3 || idGrupoSelecionado === 4) {
    constSomadora = 100
  }

  valor = (((largura + constSomadora) * 0.001) * (altura * 0.001)) * valorVidro

  return Math.round(valor * 100) / 100
}

export const calcularValorFerragem = (idVidroSelecionado: number, idGrupoSelecionado: number): number => {
  let valor = 0

  if (idGrupoSelecionado === 1) {
    if (idVidroSelecionado === 1 || idVidroSelecionado === 4) {
      valor = 40
    } else {
      valor = 50
    }
  }

  if (idGrupoSelecionado === 3) {
    if (idVidroSelecionado === 1 || idVidroSelecionado === 4) {
      valor = 250
    } else if (idVidroSelecionado === 2) {
      valor = 300
    } else {
      valor = 350
    }
  }

  if (idGrupoSelecionado === 6) {
    if (idVidroSelecionado === 3) {
      valor = 220
    } else {
      valor = 200
    }
  }

  if (idGrupoSelecionado === 8) {
    if (idVidroSelecionado === 3 || idVidroSelecionado === 6) {
      valor = 500
    } else {
      valor = 400
    }
  }
  
  if (idGrupoSelecionado === 2) {
    valor = 60
  } else if (idGrupoSelecionado === 4) {
    valor = 350
  } else if (idGrupoSelecionado === 5) {
    valor = 200
  } else if (idGrupoSelecionado === 7) {
    valor = 300
  } else if (idGrupoSelecionado === 9) {
    valor = 500
  } else if (idGrupoSelecionado === 10) {
    valor = 600
  }

  return valor
}

export const calcularValorPC = (valorInseridoPc: number): number => {
  let valor = (valorInseridoPc * 0.001) * 55

  return Math.round(valor * 100) / 100
}

export const calcularValorPainel = (medidaPainel: number, valorLargura: number): number => {
  let valor = ((valorLargura * 0.001) * (medidaPainel * 0.001) * 180)

  return Math.round(valor * 100) / 100
}

export const calcularValorPlotagem = (plotagem: number): number => {
  let valor = plotagem * 0.04
  return Math.round(valor * 100) / 100
}

export const calcularTributacao = (valorAluminio: number, valorFerragem: number, valorMaoDeObra: number, valorVidro: number): number => {
  let valor = (valorAluminio + valorFerragem + valorMaoDeObra + valorVidro) * 0.06

  return Math.round(valor * 100) / 100
}