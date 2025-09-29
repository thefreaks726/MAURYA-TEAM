import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

try {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} catch (error) {
  console.error('Failed to render app:', error);
  rootElement.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: system-ui, sans-serif; text-align: center; padding: 20px;">
      <h1>Failed to load application</h1>
      <p>Please refresh the page or check the console for more details.</p>
      <button onclick="window.location.reload()" style="padding: 10px 20px; margin-top: 10px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Refresh Page</button>
    </div>
  `;
}
