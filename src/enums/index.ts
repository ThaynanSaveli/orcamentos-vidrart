export const ProdutoTipo = {
  JANELA: "janela",
  PORTA: "porta",
  FIXOS: "fixos",
  BASCULAS: "basculas",
  BOX: "box",
  BOXTETO: "boxTeto",
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