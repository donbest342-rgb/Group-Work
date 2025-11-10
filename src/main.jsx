import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App.jsx';
import "./index.css";

const root = createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
