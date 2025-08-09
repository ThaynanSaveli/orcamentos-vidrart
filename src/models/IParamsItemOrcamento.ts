import type { IItemOrcamento } from "./IItemOrcamento";

export interface IParamsItemOrcamento {
  item: any
  removerItem: (id: string) => void;
  atualizarItem: (id: string, novoItem: IItemOrcamento) => void;
}