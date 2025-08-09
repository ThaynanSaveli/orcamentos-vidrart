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
import { TIPOS_GRUPO, TIPOS_VIDRO } from '../constants';
import { calcularTributacao, calcularValorAluminioJanelaEPorta, calcularValorFerragem, calcularValorPainel, calcularValorPC, calcularValorPlotagem, calcularValorVidro } from '../utils';

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
    arr.push({
      id: uuidv4(),
      grupo: null,
      tipoProduto: null,
      corAluminio: '',
      quantidade: 1,
      altura: 0,
      largura: 0,
      pc: 0,
      maoDeObra: 0,
      valorAluminio: 0,
      valorFerragem: 0,
      valorPc: 0,
      plotagem: 0,
      valorVidro: 0,
      valorPlotagem: 0,
      alturaPainel: 0,
      valorPainel: 0,
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
    let grupoSelecionado = TIPOS_GRUPO.find((x) => x.id === novoItem.grupo)
    let vidroSelecionado = TIPOS_VIDRO.find((x) => x.id === novoItem.tipoProduto)

    novoItem.valorVidro = calcularValorVidro(novoItem.altura, novoItem.largura, vidroSelecionado?.valorCusto ?? 0, vidroSelecionado?.id ?? 0, grupoSelecionado?.id ?? 0)
    novoItem.valorPc = calcularValorPC(novoItem.pc)
    novoItem.valorPainel = calcularValorPainel(novoItem.alturaPainel, novoItem.largura)
    novoItem.valorPlotagem = calcularValorPlotagem(novoItem.plotagem)
    novoItem.valorFerragem = calcularValorFerragem(vidroSelecionado?.id ?? 0, grupoSelecionado?.id ?? 0)

    if (grupoSelecionado.id < 10) {
      novoItem.valorAluminio = calcularValorAluminioJanelaEPorta(novoItem.altura, novoItem.largura, grupoSelecionado.multiplicadorAluminioAltura, grupoSelecionado.multiplicadorAluminioLargura)
    }

    let valorTributacao = calcularTributacao(novoItem.valorAluminio, novoItem.valorFerragem, novoItem.maoDeObra, novoItem.valorVidro)

    let valorTotalUnitario = novoItem.maoDeObra + novoItem.valorAluminio + novoItem.valorFerragem + novoItem.valorVidro + novoItem.valorPc + 
    novoItem.valorPainel + novoItem.valorPlotagem + novoItem.deslocamento + valorTributacao

    novoItem.valorTotalUnitario = valorTotalUnitario
    novoItem.valorTotal = novoItem.quantidade * valorTotalUnitario

    setItensOrcamento(prev =>
      prev.map(item => (item.id === id ? novoItem : item))
    );
  };

  const handleGerarOrcamento = () => {
    console.log('itensOrcamento', itensOrcamento)
    // if (nomeCliente === '') {
    //   ToastService.showError('Erro', 'Preencha o nome do cliente');
    //   return
    // }

    // gerarPDFOrcamento(itensOrcamento, TIPOS_VIDRO, {
    //   nome: 'Vidrarte Vidraçaria',
    //   endereco: 'Av. Linhares, 258 - Praia Grande - Fundão/ES',
    //   telefone: '(27) 99625-9769',
    //   email: ' vidrartevidracariaes@gmail.com',
    // }, nomeCliente, date ?? new Date(), porcentagemDescontoPix, qtdVezesParcelamento, valorDescontoManual);
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
            <div className='mt-4'>
              {
                itensOrcamento.map((item, index) => (
                  <ItemOrcamento 
                    key={`item-orcamento-${index}`} 
                    item={item} 
                    removerItem={handleRemoverItemOrcamento}
                    atualizarItem={handleAtualizarItemOrcamento}
                  />
                ))
              }
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