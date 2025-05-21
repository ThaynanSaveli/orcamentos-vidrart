import { Toast } from 'primereact/toast';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { ToastService } from './services/toast';

function App() {
  return (
    <div>
      <Toast ref={(el) => ToastService.setRef(el)} />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
