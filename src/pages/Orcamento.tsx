import { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { addLocale } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { ItemOrcamento } from '../components/ItemOrcamento';
import type { IItemOrcamento } from '../models/IItemOrcamento';
import { v4 as uuidv4 } from 'uuid';
import { gerarPDFOrcamento } from '../utils/gerarPDF';
import { ToastService } from '../services/toast';
import { InputNumber } from 'primereact/inputnumber';
import { TIPOS_PRODUTOS } from '../constants';
import { ProdutoTipo } from '../enums';

export const Orcamento = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [nomeCliente, setNomeCliente] = useState<string>("");
  const [qtdVezesParcelamento, setQtdVezesParcelamento] = useState<string>('3');
  const [porcentagemDescontoPix, setPorcentagemDescontoPix] = useState<number>(5);
  const [valorDescontoManual, setValorDescontoManual] = useState<number>(0);
  const [itensOrcamento, setItensOrcamento] = useState<IItemOrcamento[]>([])

  addLocale('pt', {
    firstDayOfWeek: 1,
    dateFormat: 'dd/mm/yy',
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Hoje',
    clear: 'Limpar'
  });

  function handleAdicionarItemOrcamento() {
    let arr = [...itensOrcamento]
    arr.unshift({
      id: uuidv4(),
      tipoProduto: null,
      produto: null,
      produtoDescricao: '',
      corAluminio: '',
      quantidade: 1,
      altura: 0,
      largura: 0,
      pc: 0,
      maoDeObra: 0,
      plotagem: 0,
      alturaPainel: 0,
      deslocamento: 0,
      valorTotalUnitario: 0,
      valorTotal: 0,
    })

    setItensOrcamento(arr)
  }

  const handleRemoverItemOrcamento = (id: string) => {
    setItensOrcamento(prev => prev.filter(item => item.id !== id));
  };

  const handleAtualizarItemOrcamento = (id: string, novoItem: IItemOrcamento) => {
    let tipoProdutoSelecionado = TIPOS_PRODUTOS.filter((x) => x.id === novoItem.tipoProduto)[0]
    
    switch (tipoProdutoSelecionado.tipo) {
      case ProdutoTipo.JANELA:
        let produtoSelecionado = tipoProdutoSelecionado?.produtos.filter((x) => x.id === novoItem.produto)[0]

        let valorFinal = tipoProdutoSelecionado.functionCalcularValorFinal({
          altura: novoItem.altura,
          largura: novoItem.largura,
          valorPc: novoItem.pc,
          maoDeObra: novoItem.maoDeObra,
          valorDeslocamento: novoItem.deslocamento,
          valorFerragem: produtoSelecionado.valorFerragem,
          multiplicadorAltura: produtoSelecionado?.multiplicadorAltura,
          multiplicadorLargura: produtoSelecionado?.multiplicadorLargura,
          constanteCalculoVidro: produtoSelecionado?.constanteCalculoVidro,
          custoVidro: produtoSelecionado?.custoVidro
        })
        
        novoItem.produtoDescricao = produtoSelecionado.descricao
        novoItem.valorTotalUnitario = valorFinal
        novoItem.valorTotal = valorFinal * novoItem.quantidade

        break
    }

    setItensOrcamento(prev =>
      prev.map(item => (item.id === id ? novoItem : item))
    );
  };

  const handleGerarOrcamento = () => {
    if (nomeCliente === '') {
      ToastService.showError('Erro', 'Preencha o nome do cliente');
      return
    }

    gerarPDFOrcamento(itensOrcamento, {
      nome: 'Vidrarte Vidraçaria',
      endereco: 'Av. Linhares, 258 - Praia Grande - Fundão/ES',
      telefone: '(27) 99625-9769',
      email: ' vidrartevidracariaes@gmail.com',
    }, nomeCliente, date ?? new Date(), porcentagemDescontoPix, qtdVezesParcelamento, valorDescontoManual);
  };


  return (
    <div className="p-2">
      <TabView>
        <TabPanel header="Orçamentos" leftIcon="pi pi-file-plus mr-2">
          <div className="card flex flex-column md:flex-row gap-3">
            <div className='w-100'>
              <label>Nome do cliente</label>
              <div className="p-inputgroup flex-1 mt-2">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-user"></i>
                </span>
                <InputText value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)} placeholder="Nome do cliente" />
              </div>
            </div>
            <div className='w-100'>
              <label>Data do orçamento</label>
              <div className="p-inputgroup flex-1 mt-2">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-calendar"></i>
                </span>
                <Calendar value={date} onChange={(e) => setDate(e.value ?? undefined)} locale="pt" />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <div className='text-center'>
              <Button size='small' icon="pi pi-cart-plus" label="Adicionar produto" onClick={handleAdicionarItemOrcamento} />
            </div>
            <div className='grid mt-4 container-itens-orcamento'>
              {itensOrcamento.map((item) => (
                <ItemOrcamento
                  key={item.id}
                  item={item}
                  removerItem={handleRemoverItemOrcamento}
                  atualizarItem={handleAtualizarItemOrcamento}
                />
              ))}
            </div>
          </div>

          <h4>Definições de pagamento</h4>
          <div className='mt-5 flex gap-3 w-100'>
            <span className="p-float-label">
              <InputText type="number" value={porcentagemDescontoPix.toString()} onChange={(e) => setPorcentagemDescontoPix(parseInt(e.target.value))} placeholder="% desconto PIX" />
              <label htmlFor="altura">Porcentagem de desconto no PIX (%)</label>
            </span>
            <span className="p-float-label">
              <InputText type="number" value={qtdVezesParcelamento} onChange={(e) => setQtdVezesParcelamento(e.target.value)} placeholder="Vezes parcelamento" />
              <label htmlFor="altura">Quantidade de vezes no parcelamento</label>
            </span>
            <span className="p-float-label">
              <InputNumber inputId="currency-us" value={valorDescontoManual} onValueChange={(e) => setValorDescontoManual(e.target.value ?? 0)} mode="currency" currency="BRL" locale="pt-BR" placeholder="Valor da mão de obra" />
              <label htmlFor="mao_de_obra">Aplicar valor de desconto</label>
            </span>
          </div>

          <div className='flex justify-content-center gap-3 mt-5'>
            <Button size='small' icon="pi pi-sync" disabled={itensOrcamento.length === 0} label="Gerar Orçamento" severity="success" onClick={handleGerarOrcamento}/>
          </div>
        </TabPanel>
        <TabPanel header="Calculadora de Materiais" rightIcon="pi pi-calculator ml-2">
          <p className="m-0">
            Aba de calculadora dos materiais
          </p>
        </TabPanel>
      </TabView>
    </div>
  );
};