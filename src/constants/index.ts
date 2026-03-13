import { ProdutoTipo } from "../enums"
import type { IProdutoPadrao } from "../models/IProdutoPadrao"
import type { ITipoEsquadria } from "../models/ITipoEsquadria"
import type { ITipoJanela } from "../models/ITipoJanela"
import type { ITipoVidro } from "../models/ITipoVidro"
import type { ProdutoTipoUnion } from "../models/ITypeUnion"
import { calcularValorFinalJanela } from "../utils/math/janela"
import { calcularValorFinalTela } from "../utils/math/tela"

export const TIPOS_VIDRO: ITipoVidro[] = [
  {
    id: 1,
    descricao: "VIDRO INCOLOR 6MM",
    valorCusto: 175,
  },
  {
    id: 2,
    descricao: "VIDRO INCOLOR 8MM",
    valorCusto: 210,
  },
  {
    id: 3,
    descricao: "VIDRO INCOLOR 10MM",
    valorCusto: 300,
  },
  {
    id: 4,
    descricao: "VIDRO VERDE 6MM",
    valorCusto: 215,
  },
  {
    id: 5,
    descricao: "VIDRO VERDE 8MM",
    valorCusto: 265,
  },
  {
    id: 6,
    descricao: "VIDRO VERDE 10MM",
    valorCusto: 320,
  },
  {
    id: 7,
    descricao: "VIDRO FUMÊ 6MM",
    valorCusto: 215,
  },
  {
    id: 8,
    descricao: "VIDRO FUMÊ 8MM",
    valorCusto: 265,
  },
  {
    id: 9,
    descricao: "VIDRO FUMÊ 10MM",
    valorCusto: 320,
  },
]

export const TIPOS_GRUPO: any[] = [
  {
    id: 1,
    descricao: "JANELA DUAS FOLHAS SUPREMA",
    tipoGrupo: 'janela',
    tiposAluminio: ["Tipo 1", "Tipo 2"],
    corAluminio: "",
    multiplicadorAluminioAltura: 0,
    multiplicadorAluminioLargura: 0,
  },
  {
    id: 2,
    descricao: "JANELA DUAS FOLHAS TEMPERADO",
    tipoGrupo: 'janela',
    tiposAluminio: ["Tipo 1", "Tipo 2"],
    corAluminio: "",
    multiplicadorAluminioAltura: 40,
    multiplicadorAluminioLargura: 70,
  },
  {
    id: 3,
    descricao: "JANELA VE3",
    tipoGrupo: 'janela',
    tiposAluminio: ["Tipo 1", "Tipo 2"],
    corAluminio: "",
    multiplicadorAluminioAltura: 45,
    multiplicadorAluminioLargura: 200,  
  },
  {
    id: 4,
    descricao: "JANELA VE6",
    tipoGrupo: 'janela',
    tiposAluminio: ["Tipo 1", "Tipo 2"],
    corAluminio: "",
    multiplicadorAluminioAltura: 45,
    multiplicadorAluminioLargura: 200,
  },
  {
    id: 5,
    descricao: "PORTA DE CORRER P1",
    tipoGrupo: 'porta',
    tiposAluminio: ["Tipo 1", "Tipo 2"],
    corAluminio: "",
    multiplicadorAluminioAltura: 0, //conta diferente para calcular o valor do aluminio
    multiplicadorAluminioLargura: 0,
  },
  {
    id: 6,
    descricao: "PORTA DE CORRER P2",
    tipoGrupo: 'porta',
    tiposAluminio: ["Tipo 1", "Tipo 2"],
    corAluminio: "",
    multiplicadorAluminioAltura: 50,
    multiplicadorAluminioLargura: 70,
  },
  {
    id: 7,
    descricao: "PORTA DE CORRER P4",
    tipoGrupo: 'porta',
    tiposAluminio: ["Tipo 1", "Tipo 2"],
    corAluminio: "",
    multiplicadorAluminioAltura: 50,
    multiplicadorAluminioLargura: 70,
  },
  {
    id: 8,
    descricao: "PORTA DE CORRER VE2",
    tipoGrupo: 'porta',
    tiposAluminio: ["Tipo 1", "Tipo 2"],
    corAluminio: "",
    multiplicadorAluminioAltura: 50,
    multiplicadorAluminioLargura: 200,
  },
  {
    id: 9,
    descricao: "PORTA DE CORRER VE3",
    tipoGrupo: 'porta',
    tiposAluminio: ["Tipo 1", "Tipo 2"],
    corAluminio: "",
    multiplicadorAluminioAltura: 50,
    multiplicadorAluminioLargura: 200,
  },
  {
    id: 10,
    descricao: "PORTA DE CORRER VE6",
    tipoGrupo: 'porta',
    tiposAluminio: ["Tipo 1", "Tipo 2"],
    corAluminio: "",
    multiplicadorAluminioAltura: 50,
    multiplicadorAluminioLargura: 200,
  },
  {
    id: 11,
    descricao: "ESQUADRIA",
    tipoGrupo: 'esquadria',
    tiposAluminio: [],
    corAluminio: "",
    multiplicadorAluminioAltura: 50,
    multiplicadorAluminioLargura: 200,
  },
]


//novos consts
export const TIPOS_JANELA: ITipoJanela[] = [
  {
    id: 1,
    descricao: 'Janela J2 6mm Incolor',
    constanteCalculoVidro: 50, 
    custoVidro: 175, 
    multiplicadorAltura: 40,
    multiplicadorLargura: 70,
    valorFerragem: 40
  },
  {
    id: 2,
    descricao: 'Janela J2 8mm Incolor',
    constanteCalculoVidro: 50, 
    custoVidro: 210, 
    multiplicadorAltura: 45,
    multiplicadorLargura: 70,
    valorFerragem: 50
  },
  {
    id: 3,
    descricao: 'Janela J2 6mm Verde/Fumê',
    constanteCalculoVidro: 50, 
    custoVidro: 215, 
    multiplicadorAltura: 40,
    multiplicadorLargura: 70,
    valorFerragem: 40
  },
  {
    id: 4,
    descricao: 'Janela J2 8mm Verde/Fumê',
    constanteCalculoVidro: 50, 
    custoVidro: 265, 
    multiplicadorAltura: 40,
    multiplicadorLargura: 70,
    valorFerragem: 50
  },
  {
    id: 5,
    descricao: 'Janela J4 6mm Incolor',
    constanteCalculoVidro: 50, 
    custoVidro: 175, 
    multiplicadorAltura: 40,
    multiplicadorLargura: 70,
    valorFerragem: 60
  },
  {
    id: 6,
    descricao: 'Janela J4 8mm Incolor',
    constanteCalculoVidro: 50, 
    custoVidro: 210, 
    multiplicadorAltura: 40,
    multiplicadorLargura: 70,
    valorFerragem: 60
  },
  {
    id: 7,
    descricao: 'Janela J4 6mm Verde/Fumê',
    constanteCalculoVidro: 50, 
    custoVidro: 215, 
    multiplicadorAltura: 40,
    multiplicadorLargura: 70,
    valorFerragem: 60
  },
  {
    id: 8,
    descricao: 'Janela J4 8mm Verde/Fumê',
    constanteCalculoVidro: 50, 
    custoVidro: 265, 
    multiplicadorAltura: 40,
    multiplicadorLargura: 70,
    valorFerragem: 60
  },
  {
    id: 9,
    descricao: 'Janela VE3 6mm Incolor',
    constanteCalculoVidro: 100, 
    custoVidro: 175, 
    multiplicadorAltura: 45,
    multiplicadorLargura: 200,
    valorFerragem: 250
  },
  {
    id: 10,
    descricao: 'Janela VE3 8mm Incolor',
    constanteCalculoVidro: 100, 
    custoVidro: 210, 
    multiplicadorAltura: 45,
    multiplicadorLargura: 200,
    valorFerragem: 300
  },
  {
    id: 11,
    descricao: 'Janela VE3 6mm Verde/Fumê',
    constanteCalculoVidro: 100, 
    custoVidro: 215, 
    multiplicadorAltura: 45,
    multiplicadorLargura: 200,
    valorFerragem: 250
  },
  {
    id: 12,
    descricao: 'Janela VE3 8mm Verde/Fumê',
    constanteCalculoVidro: 100, 
    custoVidro: 265, 
    multiplicadorAltura: 45,
    multiplicadorLargura: 200,
    valorFerragem: 350
  },
  {
    id: 13,
    descricao: 'Janela VE6 6mm Incolor',
    constanteCalculoVidro: 100, 
    custoVidro: 175, 
    multiplicadorAltura: 45,
    multiplicadorLargura: 200,
    valorFerragem: 350
  },
  {
    id: 14,
    descricao: 'Janela VE6 8mm Incolor',
    constanteCalculoVidro: 100, 
    custoVidro: 210, 
    multiplicadorAltura: 45,
    multiplicadorLargura: 200,
    valorFerragem: 350
  },
  {
    id: 15,
    descricao: 'Janela VE6 6mm Verde/Fumê',
    constanteCalculoVidro: 100, 
    custoVidro: 215, 
    multiplicadorAltura: 45,
    multiplicadorLargura: 200,
    valorFerragem: 350
  },
  {
    id: 16,
    descricao: 'Janela VE6 8mm Verde/Fumê',
    constanteCalculoVidro: 100, 
    custoVidro: 265, 
    multiplicadorAltura: 45,
    multiplicadorLargura: 200,
    valorFerragem: 350
  },
]

export const TIPOS_ESQUADRIA: ITipoEsquadria[] = [
  {
    id: 1,
    descricao: 'J2 SUPREMA',
    constanteCalculo: 690
  },
  {
    id: 2,
    descricao: 'J4 SUPREMA',
    constanteCalculo: 730
  },
  {
    id: 3,
    descricao: 'J6 SUPREMA',
    constanteCalculo: 780
  },
  {
    id: 4,
    descricao: 'JANELA + FIXO/MAXIN-AR SUPREMA',
    constanteCalculo: 750
  },
  {
    id: 5,
    descricao: 'P2 SUPREMA',
    constanteCalculo: 750
  },
  {
    id: 6,
    descricao: 'P3 SUPREMA',
    constanteCalculo: 780
  },
  {
    id: 7,
    descricao: 'P4 SUPREMA',
    constanteCalculo: 780
  },
  {
    id: 8,
    descricao: 'P6 SUPREMA',
    constanteCalculo: 830
  },
  {
    id: 9,
    descricao: 'MAXIN-AR',
    constanteCalculo: 1000
  },
  {
    id: 10,
    descricao: 'PORTA GIRO',
    constanteCalculo: 950
  },
]

export const TIPOS_TELA: IProdutoPadrao[] = [
  {
    id: 1,
    descricao: 'TELA',
  }
]

export const TIPOS_PRODUTOS: ProdutoTipoUnion[] = [
  {
    id: 1, 
    descricao: "Janela",
    tipo: ProdutoTipo.JANELA,
    produtos: TIPOS_JANELA,
    functionCalcularValorFinal: calcularValorFinalJanela
  },
  // {
  //   id: 2, 
  //   descricao: "Porta de correr",
  //   tipo: "porta",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 3, 
  //   descricao: "Porta de abrir",
  //   tipo: "porta",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 4, 
  //   descricao: "Fixos",
  //   tipo: "fixos",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 5, 
  //   descricao: "Básculas",
  //   tipo: "basculas",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 6, 
  //   descricao: "Pivotantes",
  //   tipo: "basculas",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 7, 
  //   descricao: "Box de correr",
  //   tipo: "box",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 8, 
  //   descricao: "Box de abrir",
  //   tipo: "box",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 9, 
  //   descricao: "Box até o teto",
  //   tipo: "boxTeto",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 10, 
  //   descricao: "Box reposição",
  //   tipo: "box",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 11, 
  //   descricao: "Tampo",
  //   tipo: "tampo",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 12, 
  //   descricao: "Guarda corpo",
  //   tipo: "guardaCorpo",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 13, 
  //   descricao: "Corrimão",
  //   tipo: "corrimao",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 14, 
  //   descricao: "Fechamento de pia",
  //   tipo: "fechamento",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  {
    id: 15, 
    descricao: "Telas",
    tipo: ProdutoTipo.TELA,
    produtos: TIPOS_TELA,
    functionCalcularValorFinal: calcularValorFinalTela
  },
  // {
  //   id: 16, 
  //   descricao: "Grades",
  //   tipo: "grades",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 17, 
  //   descricao: "Portões",
  //   tipo: "portao",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 18, 
  //   descricao: "Portinhola",
  //   tipo: "portinhola",
  //   produtos: [],
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
  // {
  //   id: 19, 
  //   descricao: "Esquadria",
  //   tipo: "esquadria",
  //   produtos: TIPOS_ESQUADRIA,
  //   functionCalcularValorFinal: () => console.log('teste')
  // },
]