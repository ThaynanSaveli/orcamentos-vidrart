import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Timeline } from 'primereact/timeline';
import { ProgressBar } from 'primereact/progressbar';
import { SplitButton } from 'primereact/splitbutton';
import { Skeleton } from 'primereact/skeleton';
import { LoadingListSkeleton } from '../components/LoadingListSkeleton';
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { addLocale } from 'primereact/api';

export const Dashboard = () => {
  const { theme } = useTheme();
  const [date, setDate] = useState<Date | null>(new Date());

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

  const [itensOrcamento, setItensOrcamento] = useState<any[]>([])

  function handleAdicionarItemOrcamento() {
    let arr = [...itensOrcamento]
    arr.unshift({
      tipoProduto: 1,
      quantidade: 1,
      altura: 1,
      largura: 1,
      espessura: 1,
      maoDeObra: 0,
    })
    setItensOrcamento(arr)
  }

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
                <InputText placeholder="Nome do cliente" />
              </div>
            </div>
            <div className='w-100'>
              <label>Data do orçamento</label>
              <div className="p-inputgroup flex-1 mt-2">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-calendar"></i>
                </span>
                <Calendar value={date} onChange={(e) => setDate(e.value ?? null)} locale="pt" />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <div className='text-center'>
              <Button size='small' icon="pi pi-cart-plus" label="Adicionar produto" onClick={handleAdicionarItemOrcamento} />
            </div>
            <div className='mt-4'>
              {
                itensOrcamento.map((item) => (
                  <div className='flex gap-2 w-100 mt-3'>
                    <div className='w-100'>
                      <label>Tipo de produto</label>
                      <InputText className='mt-2' placeholder="Produto" />
                    </div>
                    <div className='w-100'>
                      <label>Quantidade</label>
                      <InputText className='mt-2' placeholder="Quantidade" />
                    </div>
                    <div className='w-100'>
                      <label>Altura</label>
                      <InputText className='mt-2' placeholder="Altura" />
                    </div>
                    <div className='w-100'>
                      <label>Largura</label>
                      <InputText className='mt-2' placeholder="Largura" />
                    </div>
                    <div className='w-100'>
                      <label>Espessura</label>
                      <InputText className='mt-2' placeholder="Espessura" />
                    </div>
                    <div className='w-100'>
                      <label>Valor da mão de obra</label>
                      <InputText className='mt-2' placeholder="Valor da mão de obra" />
                    </div>
                    <div className='flex gap-2 align-items-end'>
                      <Button size='small' icon="pi pi-check" severity='success' aria-label="Filter" style={{ height: '40px'}} />
                      <Button size='small' icon="pi pi-times" severity="danger" aria-label="remove" style={{ height: '40px'}} />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className='flex justify-content-center gap-3 mt-5'>
            <Button icon="pi pi-user" label="Gerar Orçamento" severity="success" />
          </div>
        </TabPanel>
        <TabPanel header="Calculadora de Materiais" rightIcon="pi pi-calculator ml-2">
          <p className="m-0">
            Aba de calculadora dos materiais
          </p>
        </TabPanel>
      </TabView>
      {/* <div className="grid">
        <div className='col-12 md:col-8'>
          <div className="grid">
            <div className="col-12 md:col-6">
              <div className={`card relative shadow-1 border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-box-infos' : 'bg-box-infos-light'}`}>
                <div className="grid">
                  <div className="col-12 flex justify-content-between align-items-center py-0">
                    <h3 className='m-0'>Status Motoristas</h3>
                    <SplitButton
                      id="atualizarStatusMotorista"
                      label="" icon="pi pi-refresh" 
                      onClick={atualizarStatusMotoristas}
                      model={generateUpdateOptions(setTaxaAtualizacaoStatusMotoristas)}
                      disabled={loadingStatusMotoristas}
                      text
                      size='small'
                      tooltip="Atualizar"
                      tooltipOptions={{ position: 'top' }}
                    />
                  </div>
                  <div className="col-12 md:col-6">
                    {
                      loadingStatusMotoristas ? (
                        <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                          <Skeleton width="100%" height="100%"></Skeleton>
                        </div>
                      ) : (
                        <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-box-infos' : 'bg-box-infos-light'}`}>
                          <span className="text-sm font-medium line-height-1">MOTORISTAS LOGADOS</span>
                          <div className="flex align-items-center">
                            <div className="line-height-4 text-4xl">37</div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="col-12 md:col-6">
                    {
                      loadingStatusMotoristas ? (
                        <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                          <Skeleton width="100%" height="100%"></Skeleton>
                        </div>
                      ) : (
                        <div className={`card relative shadow-1 h-6rem border-round-xl p-3 badge-disponivel ${theme === 'lara-dark-blue' ? 'bg-box-infos' : 'bg-box-infos-light'}`}>
                          <span className="text-sm font-medium line-height-1">DISPONÍVEIS</span>
                          <div className="flex align-items-center">
                            <div className="line-height-4 text-4xl">3</div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="col-12 md:col-4">
                    {
                      loadingStatusMotoristas ? (
                        <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                          <Skeleton width="100%" height="100%"></Skeleton>
                        </div>
                      ) : (
                        <div className={`card relative shadow-1 h-6rem border-round-xl p-3 badge-passageiro ${theme === 'lara-dark-blue' ? 'bg-box-infos' : 'bg-box-infos-light'}`}>
                          <span className="text-sm font-medium line-height-1">PASSAGEIRO EMBARCADO</span>
                          <div className="flex align-items-center">
                            <div className="line-height-4 text-4xl">16</div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="col-12 md:col-4">
                    {
                      loadingStatusMotoristas ? (
                        <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                          <Skeleton width="100%" height="100%"></Skeleton>
                        </div>
                      ) : (
                        <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                          <span className="text-sm font-medium line-height-1">MOTORISTA A CAMINHO</span>
                          <div className="flex align-items-center">
                            <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-acaminho">
                              <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">45,71%</span>
                            </div>
                            <div className="line-height-4 text-4xl">16</div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="col-12 md:col-4">
                    {
                      loadingStatusMotoristas ? (
                        <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                          <Skeleton width="100%" height="100%"></Skeleton>
                        </div>
                      ) : (
                        <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                          <span className="text-sm font-medium line-height-1">INDISPONÍVEIS</span>
                          <div className="flex align-items-center">
                            <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-indisponivel">
                              <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">5,71%</span>
                            </div>
                            <div className="line-height-4 text-4xl">2</div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="col-12">
                    {
                      loadingStatusMotoristas ? (
                        <LoadingListSkeleton/>
                      ) : (
                        <div className={`card relative shadow-1 border-round-xl p-3 h-100 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                          <h3 className='m-0 mb-4'>Lista de motoristas</h3>
                          <Timeline 
                            value={motoristas} 
                            align="left" 
                            className="custom-timeline" 
                            marker={usuarioMarkerHistory}
                            content={usuarioContentHistory} 
                          />
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-6">
              <div className={`card relative shadow-1 border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-box-infos' : 'bg-box-infos-light'}`}>
                <div className="grid">
                  <div className="col-12 flex justify-content-between align-items-center py-0">
                    <h3 className='m-0'>Agendamentos</h3>
                    <SplitButton 
                      label="" icon="pi pi-refresh" 
                      onClick={atualizarAgendamentos}
                      model={generateUpdateOptions(setTaxaAtualizacaoAgendamentos)}
                      text
                      size='small'
                      tooltip="Atualizar"
                      tooltipOptions={{ position: 'top' }}
                    />
                  </div>
                  <div className="col-12 md:col-6">
                    {
                      loadingAgendamentos ? (
                        <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                          <Skeleton width="100%" height="100%"></Skeleton>
                        </div>
                      ) : (
                        <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                          <span className="text-sm font-medium line-height-1">AGENDAMENTOS</span>
                          <div className="flex align-items-center">
                            <div className="line-height-4 text-4xl">40</div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="col-12 md:col-6">
                    {
                      loadingAgendamentos ? (
                        <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                          <Skeleton width="100%" height="100%"></Skeleton>
                        </div>
                      ) : (
                        <div className={`card relative shadow-1 h-6rem border-round-xl p-3  ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                          <span className="text-sm font-medium line-height-1">ATRASADOS</span>
                          <div className="flex align-items-center">
                            <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-agendamento-atrasado">
                              <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">2.5%</span>
                            </div>
                            <div className="line-height-4 text-4xl">1</div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="col-12 md:col-4">
                    {
                      loadingAgendamentos ? (
                        <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                          <Skeleton width="100%" height="100%"></Skeleton>
                        </div>
                      ) : (
                        <div className={`card relative shadow-1 h-6rem border-round-xl p-3  ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                          <span className="text-sm font-medium line-height-1">PRÓXIMOS 20 MINUTOS</span>
                          <div className="flex align-items-center">
                            <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-agendamento-20-min">
                              <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">7.5%</span>
                            </div>
                            <div className="line-height-4 text-4xl">3</div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="col-12 md:col-4">
                    {
                      loadingAgendamentos ? (
                        <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                          <Skeleton width="100%" height="100%"></Skeleton>
                        </div>
                      ) : (
                        <div className={`card relative shadow-1 h-6rem border-round-xl p-3   ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                          <span className="text-sm font-medium line-height-1">PRÓXIMOS 40 MINUTOS</span>
                          <div className="flex align-items-center">
                            <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-agendamento-40-min">
                              <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">50.0%</span>
                            </div>
                            <div className="line-height-4 text-4xl">20</div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="col-12 md:col-4">
                    {
                      loadingAgendamentos ? (
                        <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                          <Skeleton width="100%" height="100%"></Skeleton>
                        </div>
                      ) : (
                        <div className={`card relative shadow-1 h-6rem border-round-xl p-3  ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                          <span className="text-sm font-medium line-height-1">PRÓXIMOS 120 MINUTOS</span>
                          <div className="flex align-items-center">
                            <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-agendamento-120-min">
                              <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">40.0%</span>
                            </div>
                            <div className="line-height-4 text-4xl">16</div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="col-12">
                    {
                      loadingAgendamentos ? (
                        <LoadingListSkeleton/>
                      ) : (
                        <div className={`card relative shadow-1 border-round-xl p-3 h-100 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                          <h3 className='m-0 mb-4'>Agendamentos</h3>
                          <Timeline 
                            value={agendamentos} 
                            align="left" 
                            className="custom-timeline" 
                            marker={agendamentoMarkerHistory}
                            content={agendamentoContentHistory} 
                          />
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-4">
          <div className={`card relative shadow-1 border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-box-infos' : 'bg-box-infos-light'}`}>
            <div className="grid">
              <div className="col-12 flex justify-content-between align-items-center py-0">
                <h3 className='m-0'>Mês atual</h3>
                <SplitButton 
                  label="" icon="pi pi-refresh" 
                  onClick={atualizarInfosMesAtual} 
                  model={generateUpdateOptions(setTaxaAtualizacaoInfosMesAtual)}
                  text
                  size='small'
                  tooltip="Atualizar"
                  tooltipOptions={{ position: 'top' }}
                />
              </div>
              <div className="col-12">
                {
                  loadingInfosMesAtual ? (
                    <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                      <Skeleton width="100%" height="100%"></Skeleton>
                    </div>
                  ) : (
                    <>
                      <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                        <span className="text-sm font-medium line-height-1">META DE FATURAMENTO</span>
                        <div className="flex align-items-center">
                          <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-disponivel">
                            <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">70.005%</span>
                          </div>
                          <div className="line-height-4 text-4xl"> <span className="text-3xl">R$ 630.053,80</span> - <b>R$ 900.000,00</b></div>
                        </div>
                      </div>
                      <ProgressBar value={70} displayValueTemplate={valorFaturamento} style={{ height: '15px' }}/>
                    </>
                  )
                }
              </div>
              <div className="col-12 md:col-4">
                {
                  loadingInfosMesAtual ? (
                    <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                      <Skeleton width="100%" height="100%"></Skeleton>
                    </div>
                  ) : (
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">TOTAL PLANOS VENDIDOS</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-disponivel">
                          <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                        </div>
                        <div className="line-height-4 text-4xl">3</div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className="col-12 md:col-4">
                {
                  loadingInfosMesAtual ? (
                    <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                      <Skeleton width="100%" height="100%"></Skeleton>
                    </div>
                  ) : (
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">VALOR PLANOS VENDIDOS</span>
                      <div className="flex align-items-center">
                        <div className="line-height-4 text-3xl">R$ 5.000,96</div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className="col-12 md:col-4">
                {
                  loadingInfosMesAtual ? (
                    <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                      <Skeleton width="100%" height="100%"></Skeleton>
                    </div>
                  ) : (
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">TAXA CHRUN</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-error">
                          <i className="pi pi-arrow-down w-2rem"></i><span>1.5%</span>
                        </div>
                        <div className="line-height-4 text-4xl">3</div>
                      </div>
                    </div>
                  )
                }
              </div>

              <div className="col-12">
                <h3 className='m-0 mb-1 mt-1'>Últimos 30 dias</h3>
              </div>
              <div className="col-12 md:col-4">
                {
                  loadingInfosMesAtual ? (
                    <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                      <Skeleton width="100%" height="100%"></Skeleton>
                    </div>
                  ) : (
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">TOTAL DE CORRIDAS</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                          <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                        </div>
                        <div className="line-height-4 text-3xl">3</div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className="col-12 md:col-4">
                {
                  loadingInfosMesAtual ? (
                    <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                      <Skeleton width="100%" height="100%"></Skeleton>
                    </div>
                  ) : (
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">HORAS CONSUMIDAS</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                          <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                        </div>
                        <div className="line-height-4 text-3xl">352h</div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className="col-12 md:col-4">
                {
                  loadingInfosMesAtual ? (
                    <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                      <Skeleton width="100%" height="100%"></Skeleton>
                    </div>
                  ) : (
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">TEMPO MÉDIO CORRIDAS</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                          <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                        </div>
                        <div className="line-height-4 text-3xl">12.4</div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className="col-12 md:col-6">
                {
                  loadingInfosMesAtual ? (
                    <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                      <Skeleton width="100%" height="100%"></Skeleton>
                    </div>
                  ) : (
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">TEMPO MÉDIO ANTECEDÊNCIA</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                          <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                        </div>
                        <div className="line-height-4 text-3xl">5min</div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className="col-12 md:col-6">
                {
                  loadingInfosMesAtual ? (
                    <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                      <Skeleton width="100%" height="100%"></Skeleton>
                    </div>
                  ) : (
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">FATURAMENTO</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                          <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                        </div>
                        <div className="line-height-4 text-3xl">R$ 32.762,62</div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className="col-12 md:col-6">
                {
                  loadingInfosMesAtual ? (
                    <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                      <Skeleton width="100%" height="100%"></Skeleton>
                    </div>
                  ) : (
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">TOTAL DE PLANOS VENDIDOS</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                          <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                        </div>
                        <div className="line-height-4 text-3xl">38</div>
                      </div>
                    </div>
                  )
                }
              </div>
              <div className="col-12 md:col-6">
                {
                  loadingInfosMesAtual ? (
                    <div className="card relative shadow-1 h-6rem border-round-xl p-0">
                      <Skeleton width="100%" height="100%"></Skeleton>
                    </div>
                  ) : (
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">VALOR PLANOS VENDIDOS</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                          <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                        </div>
                        <div className="line-height-4 text-3xl">R$ 32.762,62</div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-6">
          <div className={`card shadow-1 p-3 border-round-md ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
            <h3 className="mb-3 mt-0">Gráfico 1</h3>
            <Chart type="line" data={lineData} options={lineChartOptions} />
          </div>
        </div>
        <div className="col-12 md:col-6">
          <div className={`card shadow-1 p-3 border-round-md ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
            <h3 className="mb-3 mt-0">Gráfico 2</h3>
            <Chart type="line" data={lineData} options={lineChartOptions} />
          </div>
        </div>
      
      </div> */}
    </div>
  );
};