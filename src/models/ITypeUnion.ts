import type { ProdutoJanela } from "./produtos/IProdutoJanela";
import type { ProdutoTela } from "./produtos/IProdutoTela";

export type ProdutoTipoUnion =
  | ProdutoJanela
  | ProdutoTela