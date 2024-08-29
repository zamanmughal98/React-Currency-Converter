import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CurrencyConverter from './components/CurrencyConverter';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrencyConverter />
  </StrictMode>,
);
