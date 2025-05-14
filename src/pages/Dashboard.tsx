import { Chart } from 'primereact/chart';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Timeline } from 'primereact/timeline';
import { Button } from 'primereact/button';

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
    labels: ['Jan', 'Fev', 'Mar', 'Abr'],
    datasets: [
      {
        label: 'Vendas',
        data: [65, 59, 80, 81],
        fill: true,
        borderColor: '#42A5F5'
      }
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
    <div className="p-4">
      <div className="grid">
        <div className='col-12'>
          <div className="grid">
            <div className="col-12 md:col-4">
              <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : ''}`}>
                <span className="text-sm font-medium line-height-1">CONVERSATION RATE</span>
                <div className="flex align-items-center">
                  <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-error">
                    <i className="pi pi-arrow-down w-2rem"></i><span className="line-height-2">0.6%</span>
                  </div>
                  <div className="line-height-4 text-4xl">0.81%</div>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-4">
              <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : ''}`}>
                <span className="text-sm font-medium line-height-1">CONVERSATION RATE</span>
                <div className="flex align-items-center">
                  <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                    <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">4.2%</span>
                  </div>
                  <div className="line-height-4 text-4xl">4.75%</div>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-4">
              <div className={`card relative shadow-1 h-6rem border-round-xl p-3 ${theme === 'lara-dark-blue' ? 'bg-dark' : ''}`}>
                <span className="text-sm font-medium line-height-1">CONVERSATION RATE</span>
                <div className="flex align-items-center">
                  <div className="flex justify-content-center align-items-center h-2rem w-5rem border-round-md p-2 mr-3 badge-success">
                    <i className="pi pi-arrow-up w-2rem"></i><span className="line-height-2">3.7%</span>
                  </div>
                  <div className="line-height-4 text-4xl">2.73%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-8">
          <div className={`card shadow-1 p-3 border-round-md ${theme === 'lara-dark-blue' ? 'bg-dark' : ''}`}>
            <h3 className="mb-3 mt-0">Gráfico 1</h3>
            <Chart type="line" data={lineData} />
          </div>
        </div>
        <div className="col-12 md:col-4">
          <div className={`card shadow-1 border-round-md ${theme === 'lara-dark-blue' ? 'bg-dark' : ''}`}>
            <div className='history-header p-3 flex justify-content-between align-items-center'>
              <h3 className='m-0'>Histórico de compras</h3>
              <div className='header-icons'>
                <Button icon="pi pi-refresh" tooltip="Atualizar" tooltipOptions={{ position: 'top' }} size="small" rounded text aria-label="Filter" />
                <Button icon="pi pi-filter" size="small" rounded text aria-label="Filter" />
              </div>
            </div>
            <div className='px-3'>
              <Timeline 
                value={events} 
                align="left" 
                className="custom-timeline" 
                marker={customizedMarkerHistory}
                content={customizedContentHistory} 
              />
            </div>
            <div className='history-footer border-top-1 mt-4 surface-border p-3 flex align-items-center justify-content-center'>
              Ver histórico completo
            </div>
          </div>
        </div>

        <div className="col-12 md:col-5">
          <div className={`card shadow-1 p-3 border-round-md ${theme === 'lara-dark-blue' ? 'bg-dark' : ''}`}>
            <h3 className="mb-3 mt-0">Gráfico 2</h3>
            <Chart type="bar" data={barHorizontalData} options={barHorizontalOptions} />
          </div>
        </div>
        <div className="col-12 md:col-7">
          <div className={`card shadow-1 p-3 border-round-md ${theme === 'lara-dark-blue' ? 'bg-dark' : ''}`}>
            <h3 className="mb-3 mt-0">Gráfico 2</h3>
            <Chart type="bar" data={barData} />
          </div>
        </div>
      </div>
    </div>
  );
};