// src/components/Header.tsx

import { Button } from 'primereact/button';
import { useTheme } from '../context/ThemeContext';
import Logo from '../assets/react.svg';

export const Header = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="flex justify-content-between align-items-center px-4 py-2 border-bottom shadow-1 mb-3">
      <div className='flex gap-2 align-items-center'>
        <img src={Logo} alt="Logo" height={40} />
        <h4 className='mb-0 mt-0'>V1 Prime | Indicadores</h4>
      </div>
      <Button
        icon={theme === 'lara-dark-blue' ? 'pi pi-sun' : 'pi pi-moon'}
        onClick={toggleTheme}
        className="p-button-rounded p-button-text"
      />
    </div>
  );
};
