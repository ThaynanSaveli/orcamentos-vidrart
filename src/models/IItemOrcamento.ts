export interface IItemOrcamento {
  id: string;
  tipoProduto: number | null;
  produto: number | null;
  produtoDescricao: string;
  quantidade: number;
  altura: number;
  largura: number;
  corAluminio: string;
  pc: number;
  plotagem: number;
  alturaPainel: number;
  maoDeObra: number;
  deslocamento: number;
  valorTotalUnitario: number
  valorTotal: number
}