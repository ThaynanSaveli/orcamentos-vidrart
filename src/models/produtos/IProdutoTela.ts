import type { ProdutoTipo } from "../../enums";
import type { IProdutoPadrao } from "../IProdutoPadrao";
import type { IProdutoTipoBase } from "../IProdutoTipoBase";
import type { IParamsCalculoTela } from "../params/IParamsCalculoTela";

export type ProdutoTela = IProdutoTipoBase<
  typeof ProdutoTipo.TELA,
  IProdutoPadrao,
  IParamsCalculoTela
>