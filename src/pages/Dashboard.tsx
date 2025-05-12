import { Chart } from 'primereact/chart';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Dashboard = () => {
  const { theme } = useTheme();

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
  const [data] = useState({
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

  return (
    <div className="p-4">
      <div className="grid">
        <div className="col-12 md:col-6">
          <div className={`card shadow-1 p-3 border-round-md ${theme === 'lara-dark-blue' ? 'bg-dark' : ''}`}>
            <h3 className="mb-3 mt-0">Gráfico 1</h3>
            <Chart type="line" data={data} />
          </div>
        </div>

        <div className="col-12 md:col-6">
          <div className={`card shadow-1 p-3 border-round-md ${theme === 'lara-dark-blue' ? 'bg-dark' : ''}`}>
            <h3 className="mb-3 mt-0">Gráfico 2</h3>
            <Chart type="bar" data={barData} />
          </div>
        </div>
      </div>
    </div>
  );
};