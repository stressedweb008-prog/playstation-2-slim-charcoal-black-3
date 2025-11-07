"use client";

import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductTitlePriceProps {
  showTitleSection?: boolean;
  showPriceSection?: boolean;
}

const ProductTitlePrice = ({ 
  showTitleSection = true, 
  showPriceSection = true 
}: ProductTitlePriceProps) => {
  return (
    <div>
      {showTitleSection && (
        <>
          <div className="mb-2 flex items-center justify-between text-xs sm:text-sm text-text-secondary">
            <div>
              <span>Novo</span>
              <span className="mx-1.5 inline-block h-3 w-px bg-black/25 align-middle" />
              <span>+50mil vendidos</span>
            </div>

            {/* Rating */}
            <a href="#" className="flex items-center gap-1.5 no-underline">
              <span className="text-xs sm:text-sm font-medium text-[#3483FA]">4.9</span>
              <div className="flex items-center text-[#3483FA]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-[#3483FA] hover:text-[#2968C8]">(160)</span>
            </a>
          </div>

          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-[3px] bg-[#F06E30] px-1.5 py-0.5 text-[11px] font-semibold uppercase text-white">
              MAIS VENDIDO
            </span>
            <a href="#" className="text-xs text-interactive-primary hover:text-interactive-hover">
              12° em Consoles
            </a>
          </div>

          <h1 className="mb-2 text-base sm:text-lg font-normal leading-tight text-text-primary">
            Sony PlayStation 2 Slim Standard Charcoal black
          </h1>
        </>
      )}

      {showPriceSection && (
        <>
          <div className="mb-1 mt-4 sm:mt-5">
            <p className="text-[28px] sm:text-[36px] font-light leading-none text-text-primary">
              R$ 269,90
            </p>
          </div>

          <p className="text-sm text-text-primary">
            <span className="text-[#00A650]">12x R$ 22,50 sem juros</span> com cartão Mercado Pago
          </p>

          <a href="#" className="mt-1 inline-block text-sm text-interactive-primary hover:text-interactive-hover">
            Ver os meios de pagamento
          </a>

          <p className="mt-3 text-sm text-text-primary">
            <span className="font-semibold text-[#00A650]">Receba grátis</span> entre quarta-feira e sexta-feira
          </p>

          <p className="mt-2 text-sm text-text-primary">
            Vendido por <span className="text-interactive-primary">Loja World Games</span>
          </p>

          <p className="mt-0.5 text-xs text-text-secondary">
            +100 vendas
          </p>

          <p className="mt-2 text-sm font-bold text-text-primary">
            Último disponível!
          </p>

          <div className="mt-3 flex flex-col gap-2">
            <Button
              size="lg"
              onClick={() => window.open("https://www.youtube.com", "_blank")}
              className="w-full h-12 bg-primary hover:bg-interactive-hover text-primary-foreground font-semibold text-base rounded-md"
            >
              Comprar agora
            </Button>
            <Button
              size="lg"
              className="w-full h-12 bg-primary/10 border-none text-primary hover:bg-primary/20 hover:text-primary font-semibold text-base rounded-md"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Adicionar ao carrinho
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductTitlePrice;
