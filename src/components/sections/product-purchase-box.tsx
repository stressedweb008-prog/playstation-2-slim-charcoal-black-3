"use client";

import { Button } from "@/components/ui/button";
import {
  Truck,
  ShoppingCart,
  ChevronDown,
  MessageSquare,
  Clock,
} from "lucide-react";

const ProductPurchaseBox = () => {
  return (
    <aside className="hidden lg:block sticky top-20 border border-border-default rounded-md bg-card text-card-foreground card-shadow p-6 w-full max-w-sm">
      {/* Shipping information */}
      <div className="flex items-start gap-x-4">
        <Truck
          className="h-6 w-6 text-success-green flex-shrink-0"
          aria-hidden="true"
        />
        <div>
          <p className="text-sm font-semibold text-success-green">
            Frete grátis
          </p>
          <p className="text-sm text-text-secondary mt-1">
            Saiba os prazos de entrega e as formas de envio.
          </p>
          <a
            href="#"
            className="text-sm text-link hover:text-interactive-hover mt-1.5 block"
          >
            Calcular o prazo de entrega
          </a>
        </div>
      </div>

      {/* Stock and Quantity */}
      <div className="mt-8">
        <p className="text-base font-semibold text-text-primary">
          Estoque disponível
        </p>
        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <span className="text-base text-text-primary">Quantidade:</span>
            <button
              id="quantity-selector"
              className="flex items-center gap-1 p-1 -m-1 rounded hover:bg-black/5 transition-colors"
              aria-haspopup="listbox"
            >
              <span className="text-base font-semibold text-text-primary">
                1 unidade
              </span>
              <ChevronDown className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col gap-y-2">
        <Button
          size="lg"
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

      {/* Seller Information */}
      <div className="mt-8 border-t border-border-default pt-6">
        <p className="text-sm text-text-primary">
          Vendido por{" "}
          <a
            href="#"
            className="font-normal text-link hover:text-interactive-hover"
          >
            World Games
          </a>
        </p>
        <p className="text-xs text-text-secondary mt-2">+100 vendas</p>
        <ul className="mt-6 space-y-3">
          <li className="flex items-center gap-2.5">
            <MessageSquare className="h-5 w-5 text-foreground/70 flex-shrink-0" />
            <span className="text-sm text-text-primary">Bom atendimento</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Clock className="h-5 w-5 text-foreground/70 flex-shrink-0" />
            <span className="text-sm text-text-primary">Entrega rápida</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default ProductPurchaseBox;