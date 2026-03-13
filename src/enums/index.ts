export const ProdutoTipo = {
  JANELA: "janela",
  PORTACORRER: "portaCorrer",
  PORTAABRIR: "portaAbrir",
  FIXOS: "fixos",
  BASCULAS: "basculas",
  BOX: "box",
  BOXTETO: "boxTeto",
  REPOSICAO: "reposicao",
  TAMPO: "tampo",
  GUARDACORPO: "guardaCorpo",
  CORRIMAO: "corrimao",
  FECHAMENTO: "fechamento",
  TELA: "tela",
  GRADES: "grades",
  PORTAO: "portao",
  PORTINHOLA: "portinhola",
  ESQUADRIA: "esquadria"
} as const

export type ProdutoTipo = typeof ProdutoTipo[keyof typeof ProdutoTipo]