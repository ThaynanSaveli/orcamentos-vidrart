import { Chart } from 'primereact/chart';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Timeline } from 'primereact/timeline';

import { ProgressBar } from 'primereact/progressbar';
import React from 'react';

export const Dashboard = () => {
  const { theme } = useTheme();

  const motoristas = [
    { nome: 'Igor', status: 'Disponível', localizacao: 'VIX Logística - Matriz, Vitoria - ES', icon: 'pi pi-user', color: '#0bd18a', image: 'game-controller.jpg' },
    { nome: 'Sheimon', status: 'Disponível', localizacao: 'VIX Logística - Matriz, Vitoria - ES', icon: 'pi pi-user', color: '#0bd18a', image: 'game-controller.jpg' },
    { nome: 'Brenno', status: 'Disponível', localizacao: 'VIX Logística - Matriz, Vitoria - ES', icon: 'pi pi-user', color: '#0bd18a', image: 'game-controller.jpg' },
    { nome: 'William', status: 'Com Passageiro', localizacao: 'Av. Fernando Ferrari, 3073 - Goiabeiras', icon: 'pi pi-user', color: '#00adff', image: 'game-controller.jpg' },
    { nome: 'Lauro', status: 'Com Passageiro', localizacao: 'Av. Prof. Fernando Duarte Rabelo - Maria Ortiz, Vitória - ES', icon: 'pi pi-user', color: '#00adff', image: 'game-controller.jpg' },
    { nome: 'Thaynan', status: 'Com Passageiro', localizacao: 'Av. José Moreira Martins Rato, 1328 - Conj. Carapina I, Serra - ES', icon: 'pi pi-user', color: '#00adff', image: 'game-controller.jpg' }
  ];

  const agendamentos = [
    { passageiro: 'Lucas Andrade', origem: 'Av. Marechal Mascarenhas de Moraes, 2100 - Bento Ferreira, Vitória - ES', destino: 'Rua José Teixeira, 55 - Praia do Canto, Vitória - ES', Estimativa: '14 min', date: '20/05/2025 10:30', icon: 'pi pi-clipboard', color: '#fc6161', image: 'game-controller.jpg' },
    { passageiro: 'Ana Paula Souza', origem: 'Rua Eugênio Netto, 200 - Santa Lúcia, Vitória - ES', destino: 'Av. Saturnino de Brito, 1000 - Praia do Canto, Vitória - ES', Estimativa: '10 min', date: '20/05/2025 16:00', icon: 'pi pi-clipboard', color: '#e043db', image: 'game-controller.jpg' },
    { passageiro: 'Carlos Eduardo Lima', origem: 'Av. Leitão da Silva, 1500 - Itararé, Vitória - ES', destino: 'Rua Aleixo Neto, 400 - Praia do Suá, Vitória - ES', Estimativa: '12 min', date: '20/05/2025 16:15', icon: 'pi pi-clipboard', color: '#e043db', image: 'game-controller.jpg' },
    { passageiro: 'Fernanda Ribeiro', origem: 'Rua Humberto Martins de Paula, 80 - Jardim Camburi, Vitória - ES', destino: 'Av. Fernando Ferrari, 1050 - Goiabeiras, Vitória - ES', Estimativa: '8 min', date: '21/05/2025 10:00', icon: 'pi pi-clipboard', color: '#e043db', image: 'game-controller.jpg' },
    { passageiro: 'Bruno Martins', origem: 'Rua José Alves, 300 - Maruípe, Vitória - ES', destino: 'Rua Sete de Setembro, 900 - Centro, Vitória - ES', Estimativa: '30 min', date: '21/05/2025 10:00', icon: 'pi pi-clipboard', color: '#e9a659', image: 'game-controller.jpg' },
    { passageiro: 'Juliana Castro', origem: 'Av. Adalberto Simão Nader, 150 - Mata da Praia, Vitória - ES', destino: 'Rua Dona Maria Rosa, 45 - Ilha do Boi, Vitória - ES', Estimativa: '15 min', date: '21/05/2025 10:00', icon: 'pi pi-clipboard', color: '#e9a659', image: 'game-controller.jpg' }
  ];

  const [barHorizontalData, setChartData] = useState({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'blue',
          borderColor: 'blue',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'pink',
          borderColor: 'pink',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
  });

  let lineChartOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
  }

  const [barHorizontalOptions, setChartOptions] = useState({
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
  });


  const [barData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Vendas',
        data: [65, 59, 80, 81],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC'], // cores individuais
        borderRadius: 6,         // bordas arredondadas
        borderWidth: 1,
        borderColor: '#ffffff',  // borda branca para contraste
        hoverBackgroundColor: '#1976D2'
      }
    ]
  });

  const [lineData] = useState({
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Motoristas',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        tension: 0.4,
        borderColor: '#d4f542'
      },
      {
        label: 'Vendas',
        data: [32, 44, 73, 81, 97, 102, 98],
        fill: false,
        tension: 0.4,
        borderColor: '#42A5F5'
      },
      {
        label: 'Cancelamento',
        data: [12, 16, 9, 21, 27, 31, 6],
        fill: false,
        tension: 0.4,
        borderColor: '#962424'
      },
      {
        label: 'Faturamento',
        data: [12, 24, 70, 99, 85, 92, 104],
        fill: false,
        tension: 0.4,
        borderColor: '#399e1a'
      },
    ]
  });

  const usuarioMarkerHistory = (item: any) => {
    return (
      <span className='custom-marker border-circle p-1 w-2rem h-2rem flex justify-content-center align-items-center' style={{ background: item.color }}>
        <i className={`${item.icon}`}></i>
      </span>
    )
  }


  const agendamentoMarkerHistory = (item: any) => {
    return (
      <span className='custom-marker border-circle p-1 w-2rem h-2rem flex justify-content-center align-items-center' style={{ background: item.color }}>
        <i className={`${item.icon}`}></i>
      </span>
    )
  }

  const usuarioContentHistory = (item: any) => {
    return (
      <>
        <div className='flex align-items-center justify-content-between'>
          <p className='m-0 text-sm'>{item.nome}</p>
          <h6 className='m-0 text-sm'>{item.status}</h6>
        </div>
        <span className='text-sm text-color-secondary'>{item.localizacao}</span>
      </>
    )
  }

  const agendamentoContentHistory = (item: any) => {
    return (
      <>
        <div className='flex align-items-center justify-content-between mb-0'>
          <p className='text-sm font-bold text-color-secondary mb-0'><b>{item.passageiro}</b> - {item.date}</p>
        </div>
          <p className='m-0 text-sm'>{item.origem}</p>
          <p className='m-0 text-sm'>{item.destino}</p>
        <br />
      </>
    )
  }

  return (
    <div className="p-2">
      <div className="grid">
        <div className='col-12 md:col-8'>
          <div className="grid">
            <div className="col-12 md:col-6">
              <div className={`card relative shadow-1 border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-box-infos' : 'bg-box-infos-light'}`}>
                <div className="grid">
                  <div className="col-12">
                    <h3 className='m-0'>Status Motoristas</h3>
                  </div>
                  <div className="col-12 md:col-6">
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-box-infos' : 'bg-box-infos-light'}`}>
                      <span className="text-sm font-medium line-height-1">MOTORISTAS LOGADOS</span>
                      <div className="flex align-items-center">
                        <div className="line-height-4 text-4xl">37</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-6">
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 badge-disponivel ${theme === 'lara-dark-blue' ? 'bg-box-infos' : 'bg-box-infos-light'}`}>
                      <span className="text-sm font-medium line-height-1">DISPONÍVEIS</span>
                      <div className="flex align-items-center">
                        <div className="line-height-4 text-4xl">3</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-4">
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 badge-passageiro ${theme === 'lara-dark-blue' ? 'bg-box-infos' : 'bg-box-infos-light'}`}>
                      <span className="text-sm font-medium line-height-1">PASSAGEIRO EMBARCADO</span>
                      <div className="flex align-items-center">
                        <div className="line-height-4 text-4xl">16</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-4">
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">MOTORISTA A CAMINHO</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-acaminho">
                          <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">45,71%</span>
                        </div>
                        <div className="line-height-4 text-4xl">16</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-4">
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">INDISPONÍVEIS</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-indisponivel">
                          <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">5,71%</span>
                        </div>
                        <div className="line-height-4 text-4xl">2</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-6">
              <div className={`card relative shadow-1 border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-box-infos' : 'bg-box-infos-light'}`}>
                <div className="grid">
                  <div className="col-12">
                    <h3 className='m-0'>Agendamentos</h3>
                  </div>
                  <div className="col-12 md:col-6">
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">AGENDAMENTOS</span>
                      <div className="flex align-items-center">
                        <div className="line-height-4 text-4xl">40</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-6">
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3  ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">ATRASADOS</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-agendamento-atrasado">
                          <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">2.5%</span>
                        </div>
                        <div className="line-height-4 text-4xl">1</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-4">
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3  ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">PRÓXIMOS 20 MINUTOS</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-agendamento-20-min">
                          <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">7.5%</span>
                        </div>
                        <div className="line-height-4 text-4xl">3</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-4">
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3   ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">PRÓXIMOS 40 MINUTOS</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-agendamento-40-min">
                          <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">50.0%</span>
                        </div>
                        <div className="line-height-4 text-4xl">20</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 md:col-4">
                    <div className={`card relative shadow-1 h-6rem border-round-xl p-3  ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                      <span className="text-sm font-medium line-height-1">PRÓXIMOS 120 MINUTOS</span>
                      <div className="flex align-items-center">
                        <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-agendamento-120-min">
                          <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">40.0%</span>
                        </div>
                        <div className="line-height-4 text-4xl">16</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-4">
          <div className={`card relative shadow-1 border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-box-infos' : 'bg-box-infos-light'}`}>
            <div className="grid">
              <div className="col-12">
                <h3 className='m-0 mb-1'>Mês atual</h3>
              </div>
              <div className="col-12">
                <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                  <span className="text-sm font-medium line-height-1">META DE FATURAMENTO</span>
                  <div className="flex align-items-center">
                    <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-disponivel">
                      <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">70.005%</span>
                    </div>
                    <div className="line-height-4 text-4xl"> <span className="text-3xl">R$ 630.053,80</span> - <b>R$ 900.000,00</b></div>
                  </div>
                </div>
                <ProgressBar value={70} style={{ height: '15px' }}/>
              </div>
              <div className="col-12 md:col-4">
                <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                  <span className="text-sm font-medium line-height-1">TOTAL PLANOS VENDIDOS</span>
                  <div className="flex align-items-center">
                    <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-disponivel">
                      <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                    </div>
                    <div className="line-height-4 text-4xl">3</div>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-4">
                <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                  <span className="text-sm font-medium line-height-1">VALOR PLANOS VENDIDOS</span>
                  <div className="flex align-items-center">
                    <div className="line-height-4 text-3xl">R$ 5.000,96</div>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-4">
                <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                  <span className="text-sm font-medium line-height-1">TAXA CHRUN</span>
                  <div className="flex align-items-center">
                    <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-error">
                      <i className="pi pi-arrow-down w-2rem"></i><span>1.5%</span>
                    </div>
                    <div className="line-height-4 text-4xl">3</div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <h3 className='m-0 mb-1 mt-1'>Últimos 30 dias</h3>
              </div>
              <div className="col-12 md:col-4">
                <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                  <span className="text-sm font-medium line-height-1">TOTAL DE CORRIDAS</span>
                  <div className="flex align-items-center">
                    <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                      <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                    </div>
                    <div className="line-height-4 text-3xl">3</div>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-4">
                <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                  <span className="text-sm font-medium line-height-1">HORAS CONSUMIDAS</span>
                  <div className="flex align-items-center">
                    <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                      <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                    </div>
                    <div className="line-height-4 text-3xl">352h</div>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-4">
                <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                  <span className="text-sm font-medium line-height-1">TEMPO MÉDIO CORRIDAS</span>
                  <div className="flex align-items-center">
                    <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                      <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                    </div>
                    <div className="line-height-4 text-3xl">12.4</div>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                  <span className="text-sm font-medium line-height-1">TEMPO MÉDIO ANTECEDÊNCIA</span>
                  <div className="flex align-items-center">
                    <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                      <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                    </div>
                    <div className="line-height-4 text-3xl">5min</div>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                  <span className="text-sm font-medium line-height-1">FATURAMENTO</span>
                  <div className="flex align-items-center">
                    <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                      <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                    </div>
                    <div className="line-height-4 text-3xl">R$ 32.762,62</div>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                  <span className="text-sm font-medium line-height-1">TOTAL DE PLANOS VENDIDOS</span>
                  <div className="flex align-items-center">
                    <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                      <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                    </div>
                    <div className="line-height-4 text-3xl">38</div>
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                  <span className="text-sm font-medium line-height-1">VALOR PLANOS VENDIDOS</span>
                  <div className="flex align-items-center">
                    <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                      <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                    </div>
                    <div className="line-height-4 text-3xl">R$ 32.762,62</div>
                  </div>
                </div>
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
      
      </div>
    </div>
  );
};