export interface ITipoProduto {
  id: string,
  descricao: string,
  tiposAluminio: [string],
  valorMaoDeObra: number,
  valorCusto: number,
  grupo: "AL" | "PRT" | ""
}