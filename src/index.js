import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarProvider } from './context/sidebarcontext';
import { CoursesProvider } from './context/coursescontext';
import { CartProvider } from './context/cartcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CoursesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CoursesProvider>
  </SidebarProvider>
);



