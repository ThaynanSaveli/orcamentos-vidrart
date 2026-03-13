import type { ProdutoTipo } from "../../enums";
import type { IProdutoTipoBase } from "../IProdutoTipoBase";
import type { ITipoPortaCorrer } from "../ITipoPortaCorrer";
import type { IParamsCalculoPortaCorrer } from "../params/IParamsCalculoPortaCorrer";

export type ProdutoPortaCorrer = IProdutoTipoBase<
  typeof ProdutoTipo.PORTACORRER,
  ITipoPortaCorrer,
  IParamsCalculoPortaCorrer
>