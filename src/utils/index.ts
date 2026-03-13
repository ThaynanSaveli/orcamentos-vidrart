export const mmToM = (medida: number): number => {
  return (medida * 0.001)
}

export const calcularValorPC = (valorInseridoPc: number): number => {
  let valor = mmToM(valorInseridoPc) * 55

  return Math.round(valor * 100) / 100
}

export const calcularValorPainel = (medidaPainel: number, valorLargura: number): number => {
  let valor = (mmToM(valorLargura) * mmToM(medidaPainel) * 180)

  return Math.round(valor * 100) / 100
}

export const calcularValorPlotagem = (plotagem: number): number => {
  let valor = plotagem * 0.04
  return Math.round(valor * 100) / 100
}


//old

export const calcularValorAluminioJanelaEPorta = (altura: number, largura: number, multiplicadorAltura: number, multiplicadorLargura: number): number => {
  let valor = (((altura * 0.001) * multiplicadorAltura) + ((largura * 0.001) * multiplicadorLargura))
  return Math.round(valor * 100) / 100
}

export const calcularValorAluminioFixos = (altura: number, largura: number): number => {
  let valor = (((altura * 0.001) * 2 * 15) + ((largura * 0.001) * 2 * 15))
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

export const calcularTributacao = (valorAluminio: number, valorFerragem: number, valorMaoDeObra: number, valorVidro: number): number => {
  let valor = (valorAluminio + valorFerragem + valorMaoDeObra + valorVidro) * 0.06

  return Math.round(valor * 100) / 100
}

export function formatReal(value: string | number) {
  value = value + '';

  if (value.indexOf(".") === -1) {
    value = value + '.00'
  }

  if (value.split('.')[0] === '0') {
    return value.split('.')[0] + ',' + value.split('.')[1];
  }

  if (value.split('.')[1].length === 1) {
    value = value + '0'
  }

  if (value.split('.')[1].length > 2) {
    value = parseFloat(value).toFixed(2).toString()
  }

  const int = parseInt(value.replace(/[\D]+/g, ''));

  var tmp = int + '';
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1");

  if (tmp.length > 6) {
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
  }

  return tmp;
}