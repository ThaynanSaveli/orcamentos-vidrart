export const ProdutoTipo = {
  JANELA: "janela",
  PORTA: "porta",
  PORTA_CORRER: "portaCorrer",
  TELA: "tela",
  ESQUADRIA: "esquadria"
} as const

export type ProdutoTipo = typeof ProdutoTipo[keyof typeof ProdutoTipo]