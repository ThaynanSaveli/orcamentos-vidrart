import type { ProdutoTipo } from "../../enums";
import type { IProdutoTipoBase } from "../IProdutoTipoBase";
import type { ITipoJanela } from "../ITipoJanela";
import type { IParamsCalculoJanela } from "../params/IParamsCalculoJanela";

export type ProdutoJanela = IProdutoTipoBase<
  typeof ProdutoTipo.JANELA,
  ITipoJanela,
  IParamsCalculoJanela
>