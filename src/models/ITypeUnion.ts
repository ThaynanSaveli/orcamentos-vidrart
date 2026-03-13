import type { ProdutoEsquadria } from "./produtos/IProdutoEsquadria";
import type { ProdutoJanela } from "./produtos/IProdutoJanela";
import type { ProdutoPortaCorrer } from "./produtos/IProdutoPortaCorrer";
import type { ProdutoTela } from "./produtos/IProdutoTela";

export type ProdutoTipoUnion =
  | ProdutoJanela
  | ProdutoTela
  | ProdutoEsquadria
  | ProdutoPortaCorrer