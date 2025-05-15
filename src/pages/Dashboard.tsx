import { Chart } from 'primereact/chart';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Timeline } from 'primereact/timeline';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';

export const Dashboard = () => {
  const { theme } = useTheme();

  const events = [
    { description: 'Ordered', price: 'R$ 3.243,93', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    { description: 'Processing', price: 'R$ 2.982,93', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { description: 'Shipped', price: 'R$ 1.654,93', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { description: 'Delivered', price: 'R$ 5.333,93', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
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

  const customizedMarkerHistory = (item: any) => {
    return (
      <span className='custom-marker border-circle p-1 w-2rem h-2rem flex justify-content-center align-items-center' style={{ background: item.color }}>
        <i className={`${item.icon}`}></i>
      </span>
    )
  }

  const customizedContentHistory = (item: any) => {
    return (
      <>
        <div className='flex align-items-center justify-content-between'>
          <p className='m-0 text-sm'>{item.description}</p>
          <h6 className='m-0 text-sm'>{item.price}</h6>
        </div>
        <span className='text-sm text-color-secondary'>{item.date}</span>
      </>
    )
  }

  return (
    <div className="p-2">
      <div className="grid">
        <div className='col-12 md:col-8'>
          <div className="grid">
            <div className="col-12 md:col-6">
              <div className="grid">
                <div className="col-12">
                  <h3 className='m-0'>Status Motoristas</h3>
                </div>
                <div className="col-12 md:col-4">
                  <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                    <span className="text-sm font-medium line-height-1">MOTORISTAS LOGADOS</span>
                    <div className="flex align-items-center">
                      <div className="line-height-4 text-4xl">4</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 md:col-4">
                  <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                    <span className="text-sm font-medium line-height-1">DISPONÍVEIS</span>
                    <div className="flex align-items-center">
                      <div className="line-height-4 text-4xl">5</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 md:col-4">
                  <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                    <span className="text-sm font-medium line-height-1">PASSAGEIRO EMBARCADO</span>
                    <div className="flex align-items-center">
                      <div className="line-height-4 text-4xl">23</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 md:col-6">
                  <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                    <span className="text-sm font-medium line-height-1">MOTORISTA A CAMINHO</span>
                    <div className="flex align-items-center">
                      <div className="line-height-4 text-4xl">6</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 md:col-6">
                  <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                    <span className="text-sm font-medium line-height-1">INDISPONÍVEIS</span>
                    <div className="flex align-items-center">
                      <div className="line-height-4 text-4xl">4</div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className={`card relative shadow-1 border-round-xl p-3 h-100 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                    <h3 className='m-0 mb-4'>Lista de motoristas</h3>
                    <Timeline 
                      value={events} 
                      align="left" 
                      className="custom-timeline" 
                      marker={customizedMarkerHistory}
                      content={customizedContentHistory} 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-6">
              <div className="grid">
                <div className="col-12">
                  <h3 className='m-0'>Agendamentos</h3>
                </div>
                <div className="col-12 md:col-6">
                  <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                    <span className="text-sm font-medium line-height-1">ATRASADOS</span>
                    <div className="flex align-items-center">
                      <div className="line-height-4 text-4xl">0</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 md:col-6">
                  <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                    <span className="text-sm font-medium line-height-1">PRÓXIMOS 20 MINUTOS</span>
                    <div className="flex align-items-center">
                      <div className="line-height-4 text-4xl">3</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 md:col-6">
                  <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                    <span className="text-sm font-medium line-height-1">PRÓXIMOS 40 MINUTOS</span>
                    <div className="flex align-items-center">
                      <div className="line-height-4 text-4xl">7</div>
                    </div>
                  </div>
                </div>
                <div className="col-12 md:col-6">
                  <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                    <span className="text-sm font-medium line-height-1">PRÓXIMOS 120 MINUTOS</span>
                    <div className="flex align-items-center">
                      <div className="line-height-4 text-4xl">12</div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className={`card relative shadow-1 border-round-xl p-3 h-100 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                    <h3 className='m-0 mb-4'>Agendamentos</h3>
                    <Timeline 
                      value={events} 
                      align="left" 
                      className="custom-timeline" 
                      marker={customizedMarkerHistory}
                      content={customizedContentHistory} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-4">
          <div className="grid">
            <div className="col-12">
              <h3 className='m-0 mb-1'>Mês atual</h3>
            </div>
            <div className="col-12">
              <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                <span className="text-sm font-medium line-height-1">META DE FATURAMENTO</span>
                <div className="flex align-items-center">
                  <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                    <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">1.5%</span>
                  </div>
                  <div className="line-height-4 text-4xl">R$ 20.938.829,98</div>
                </div>
              </div>
              <ProgressBar value={70} style={{ height: '15px' }}/>
            </div>
            <div className="col-12 md:col-4">
              <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                <span className="text-sm font-medium line-height-1">TOTAL PLANOS VENDIDOS</span>
                <div className="flex align-items-center">
                  <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
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
                  <div className="line-height-4 text-3xl">R$ 3.726,96</div>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-4">
              <div className={`card relative shadow-1 h-6rem border-round-xl p-3 mb-2 ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
                <span className="text-sm font-medium line-height-1">TAXA CHRUN</span>
                <div className="flex align-items-center">
                  <div className="line-height-4 text-3xl">R$ 1.893,92</div>
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

        {/* <div className="col-12 md:col-5">
          <div className={`card shadow-1 p-3 border-round-md ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
            <h3 className="mb-3 mt-0">Gráfico 2</h3>
            <Chart type="bar" data={barHorizontalData} options={barHorizontalOptions} />
          </div>
        </div>
        <div className="col-12 md:col-7">
          <div className={`card shadow-1 p-3 border-round-md ${theme === 'lara-dark-blue' ? 'bg-dark' : 'bg-white'}`}>
            <h3 className="mb-3 mt-0">Gráfico 2</h3>
            <Chart type="bar" data={barData} />
          </div>
        </div> */}
      </div>
    </div>
  );
};