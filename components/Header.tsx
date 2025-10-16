
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="mb-8 p-6 bg-white rounded-lg shadow-md border border-slate-200">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-2">
        Framework Hipotesis GTM vs reducida
      </h1>
      <div className="mt-4 text-slate-600">
        
        <p className="mb-2">
          <strong>Objetivo:</strong> Validar 3 hipótesis críticas (ICP, Oferta, Prueba) para encontrar 'Problem-Solution Fit' y GTM Fit inicial.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <span><strong>Duración:</strong> 6 semanas</span>
          <span><strong>Budget Total:</strong> ~€1K</span>
          <span><strong>Resultado esperado:</strong> Primeros clientes o un pivot claro con datos reales del mercado.</span>
        </div>
        <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-800 rounded-r-lg">
          <p className="text-sm">Este framework no valida el Product-Market Fit completo ni la escalabilidad. Valida el "Problem-Solution Fit" y el "Go-to-Market Fit" inicial. El resto (canales escalables, LTV:CAC, etc.) queda fuera de scope.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
