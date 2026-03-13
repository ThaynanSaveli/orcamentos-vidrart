import { ProdutoTipo } from "../enums"
import type { IProdutoPadrao } from "../models/IProdutoPadrao"
import type { ITipoEsquadria } from "../models/ITipoEsquadria"
import type { ITipoJanela } from "../models/ITipoJanela"
import type { ProdutoTipoUnion } from "../models/ITypeUnion"
import { calcularValorFinalEsquadria } from "../utils/math/esquadria"
import { calcularValorFinalJanela } from "../utils/math/janela"
import { calcularValorFinalTela } from "../utils/math/tela"

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
    descricao: 'J2 Suprema',
    constanteCalculo: 690
  },
  {
    id: 2,
    descricao: 'J4 Suprema',
    constanteCalculo: 730
  },
  {
    id: 3,
    descricao: 'J6 Suprema',
    constanteCalculo: 780
  },
  {
    id: 4,
    descricao: 'Janela + Fixo/MAXIN-AR Suprema',
    constanteCalculo: 750
  },
  {
    id: 5,
    descricao: 'P2 Suprema',
    constanteCalculo: 750
  },
  {
    id: 6,
    descricao: 'P3 Suprema',
    constanteCalculo: 780
  },
  {
    id: 7,
    descricao: 'P4 Suprema',
    constanteCalculo: 780
  },
  {
    id: 8,
    descricao: 'P6 Suprema',
    constanteCalculo: 830
  },
  {
    id: 9,
    descricao: 'MAXIN-AR',
    constanteCalculo: 1000
  },
  {
    id: 10,
    descricao: 'Porta Giro',
    constanteCalculo: 950
  },
]

export const TIPOS_TELA: IProdutoPadrao[] = [
  {
    id: 1,
    descricao: 'Tela',
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
  //   tipo: "reposicao",
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
  {
    id: 19, 
    descricao: "Esquadria",
    tipo: ProdutoTipo.ESQUADRIA,
    produtos: TIPOS_ESQUADRIA,
    functionCalcularValorFinal: calcularValorFinalEsquadria
  },
]