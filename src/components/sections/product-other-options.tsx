import React from 'react';

const ProductOtherOptions = () => {
  return (
    <div className="rounded-md border border-border-default bg-card shadow-sm">
      <div className="p-4">
        <h3 className="mb-1 text-base font-semibold text-text-primary">
          Outras opções de compra
        </h3>
        <a href="#" className="text-sm text-interactive-primary hover:text-interactive-hover">
          Ver 6 opções a partir de <span className="font-semibold">R$ 581,03</span>
        </a>
      </div>
      <hr className="border-border-default" />
      <div className="p-4">
        <h3 className="mb-1 text-base font-semibold text-text-primary">
          Opções de Usados e Recondicionados
        </h3>
        <a href="#" className="text-sm text-interactive-primary hover:text-interactive-hover">
          Ver 110 opções de compra
        </a>
      </div>
    </div>
  );
};

export default ProductOtherOptions;