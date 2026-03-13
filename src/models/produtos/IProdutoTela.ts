import type { ProdutoTipo } from "../../enums";
import type { IProdutoPadrao } from "../IProdutoPadrao";
import type { IProdutoTipoBase } from "../IProdutoTipoBase";
import type { IParamsCalculoJanela } from "../params/IParamsCalculoJanela";

export type ProdutoTela = IProdutoTipoBase<
  typeof ProdutoTipo.TELA,
  IProdutoPadrao,
  IParamsCalculoJanela
>