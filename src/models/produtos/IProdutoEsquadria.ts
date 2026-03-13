import type { ProdutoTipo } from "../../enums";
import type { IProdutoTipoBase } from "../IProdutoTipoBase";
import type { ITipoEsquadria } from "../ITipoEsquadria";
import type { IParamsCalculoEsquadria } from "../params/IParamsCalculoEsquadria";

export type ProdutoEsquadria = IProdutoTipoBase<
  typeof ProdutoTipo.ESQUADRIA,
  ITipoEsquadria,
  IParamsCalculoEsquadria
>