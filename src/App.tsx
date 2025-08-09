import { Toast } from 'primereact/toast';
import { Header } from './components/Header';
import { Orcamento } from './pages/Orcamento';
import { ToastService } from './services/toast';

function App() {
  return (
    <div>
      <Toast ref={(el) => ToastService.setRef(el)} />
      <Header />
      <Orcamento />
    </div>
  );
}

export default App;
