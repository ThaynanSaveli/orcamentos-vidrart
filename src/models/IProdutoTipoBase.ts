import type { ProdutoTipo } from "../enums"

export interface IProdutoTipoBase<
  TTipo extends ProdutoTipo,
  TProduto,
  TParams
> {
  id: number
  descricao: string
  tipo: TTipo
  produtos: TProduto[]
  functionCalcularValorFinal: (params: TParams) => number
}