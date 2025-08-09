export interface IItemOrcamento {
  id: string;
  grupo: number | null;
  tipoProduto: number | null;
  quantidade: number;
  altura: number;
  largura: number;
  corAluminio: string;
  pc: number;
  plotagem: number;
  alturaPainel: number;
  maoDeObra: number;
  valorPc: number;
  valorVidro: number;
  valorAluminio: number;
  valorFerragem: number;
  valorPlotagem: number;
  valorPainel: number;
  deslocamento: number;
  valorTotalUnitario: number
  valorTotal: number
}