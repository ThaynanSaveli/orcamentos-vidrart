import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import type { IItemOrcamento } from '../models/IItemOrcamento';
import { TIPOS_VIDRO } from '../constants';

(pdfMake as any).vfs = pdfFonts.vfs;

const logoBase64 = 'data:image/jpeg;base64,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'

interface DadosEmpresa {
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
}

export const gerarPDFOrcamento = (
  itens: IItemOrcamento[],
  dadosEmpresa: DadosEmpresa,
  nomeUsuario: string,
  dataSelecionada: Date,
  porcentagemDescontoPix: number,
  qtdVezesParcelamento: string,
  valorDescontoManual: number
) => {
  const nomeArquivo = `Orcamento_${nomeUsuario.replace(/\s+/g, '_')}_${dataSelecionada.toISOString().split('T')[0]}.pdf`;
  const produtosMap = new Map(TIPOS_VIDRO.map(p => [p.id, p.descricao]));

  const bodyTabela = [
    [
      { text: 'Produto', style: 'tableHeader' },
      { text: 'Qtd', style: 'tableHeader' },
      { text: 'Medidas (AxLxE)', style: 'tableHeader' },
      { text: 'Valor Unit.', style: 'tableHeader' },
      { text: 'Valor Total', style: 'tableHeader' },
    ],
    ...itens.map(item => {
      const valorUnitario = item.maoDeObra;
      const valorFinal = valorUnitario * item.quantidade;
      return [
        produtosMap.get(item.tipoProduto ?? 0) || 'Produto desconhecido',
        item.quantidade.toString(),
        `${item.altura} x ${item.largura}`,
        `R$ ${valorUnitario.toFixed(2)}`,
        `R$ ${valorFinal.toFixed(2)}`,
      ];
    }),
  ];

  const valorTotal = itens.reduce((acc, item) => (acc + item.maoDeObra * item.quantidade) - valorDescontoManual, 0);
  const valorPix = valorTotal * ((100 - porcentagemDescontoPix) * 0.01);
  const valorParcelado = valorTotal / parseInt(qtdVezesParcelamento);

  const docDefinition: any = {
    content: [
      {
        image: logoBase64,
        width: 120,
        alignment: 'left',
        margin: [0, 0, 0, 10],
      },
      {
        text: dadosEmpresa.nome,
        style: 'header',
      },
      {
        text: `${dadosEmpresa.endereco}\nTel: ${dadosEmpresa.telefone} | E-mail: ${dadosEmpresa.email}`,
        style: 'subheader',
        margin: [0, 0, 0, 20],
      },
      {
        text: 'Orçamento',
        style: 'title',
        margin: [0, 0, 0, 10],
      },
      {
        table: {
          widths: ['*', 'auto', 'auto', 'auto', 'auto'],
          body: bodyTabela,
        },
        layout: 'lightHorizontalLines',
        margin: [0, 0, 0, 20],
      },
      {
        text: `Valor Total: R$ ${valorTotal.toFixed(2)}`,
        style: 'total',
      },
      {
        text: `Pagamento via PIX ou dinheiro (${porcentagemDescontoPix}% desconto): R$ ${valorPix.toFixed(2)}`,
      },
      {
        text: `Parcelado em até ${qtdVezesParcelamento}x no cartão: ${qtdVezesParcelamento}x de R$ ${valorParcelado.toFixed(2)}`,
        margin: [0, 0, 0, 20],
      },
      {
        text: 'Agradecemos pela preferência!',
        style: 'footer',
      },
    ],
    styles: {
      header: {
        fontSize: 16,
        bold: true,
      },
      subheader: {
        fontSize: 10,
        color: '#555',
      },
      title: {
        fontSize: 14,
        bold: true,
        decoration: 'underline',
      },
      total: {
        fontSize: 12,
        bold: true,
      },
      footer: {
        margin: [0, 20, 0, 0],
        italics: true,
        alignment: 'center',
      },
      tableHeader: {
        bold: true,
        fillColor: '#eee',
      },
    },
    defaultStyle: {
      fontSize: 10,
    },
  };

  pdfMake.createPdf(docDefinition).download(nomeArquivo);
};
