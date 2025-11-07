"use client";

import React from 'react';
import { Search, MapPin, ShoppingCart, Menu, Star } from 'lucide-react';

const HeaderNavigation = () => {
    return (
        <header className="bg-[#FFF159] text-black w-full shadow-sm sticky top-0 z-[1030]">
            <div className="max-w-[1200px] mx-auto">
                {/* Main Header Row */}
                <div className="flex items-center justify-between px-4 py-3 gap-3">
                    {/* Logo - apenas o ícone */}
                    <a href="//www.mercadolivre.com.br" className="flex-shrink-0">
                        <img 
                            src="https://vectorseek.com/wp-content/uploads/2023/08/Mercado-Livre-Icon-Logo-Vector.svg-.png" 
                            alt="Mercado Livre" 
                            className="w-[34px] h-[34px] object-contain"
                        />
                    </a>
                    
                    {/* Search Bar */}
                    <form className="flex-1 max-w-[600px]">
                        <div className="relative h-[40px]">
                            <input
                                type="text"
                                placeholder="Estou buscando..."
                                className="w-full h-full pl-4 pr-12 bg-white rounded-sm text-sm text-[#333] placeholder:text-[#999] border-0 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3483FA]"
                            />
                            <button 
                                type="submit" 
                                className="absolute right-0 top-0 h-full w-[45px] flex items-center justify-center bg-transparent border-l border-gray-200" 
                                aria-label="Buscar"
                            >
                                <Search size={20} className="text-[#666]" />
                            </button>
                        </div>
                    </form>

                    {/* Right Icons */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <button aria-label="Menu" className="p-1">
                            <Menu size={24} className="text-[#333]" />
                        </button>
                        <a href="https://www.mercadolivre.com.br/gz/cart/v2" aria-label="Carrinho" className="p-1">
                            <ShoppingCart size={24} className="text-[#333]" />
                        </a>
                    </div>
                </div>

                {/* CEP Section with Rating */}
                <div className="border-t border-[#00000014] bg-white">
                    <div className="px-4 py-2">
                        <a href="https://www.mercadolivre.com.br/navigation/addresses-hub" className="flex items-center gap-1 text-xs hover:opacity-80 transition-opacity">
                            <MapPin size={16} className="text-[#333]"/>
                            <span className="text-[#333]">Informe seu CEP</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderNavigation;