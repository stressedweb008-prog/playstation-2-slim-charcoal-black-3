import React from 'react';

const searchTerms = [
  "Apple Watch", "Ar Condicionado", "Bicicletas", "Cafeteira", "Carros Novos", "Computador", "Fogão 4 Boca",
  "Fone De Ouvido Bluetooth", "Freezer Vertical", "Geladeira Frost Free", "Guarda Roupa Casal", "Ipad", "Iphone",
  "Iphone 8 Plus", "Iphone 11", "Iphone 13", "Iphone 14", "Iphone 14 Pro Max", "Iphone 15", "Iphone 16",
  "Iphone 16 Plus", "Iphone 16 Pro", "Iphone 16 Pro Max", "Jbl", "Microondas", "Monitor", "Motorola",
  "Nintendo Switch", "Notebook", "Notebook Dell", "Painel Para Tv", "Penteadeira", "Poco X5 Pro", "Ps4",
  "Ps5", "Redmi Note 12", "S22 Ultra", "Samsung A54", "Samsung S23", "Smartwatch", "Tablets Samsung",
  "Tenis Masculino", "Tenis Feminino", "Tv 32 Polegadas", "Tv 50 4k", "Tv 50 Polegadas", "Ventilador",
  "Xbox", "Xbox Series X", "Xdj", "Xiaomi", "Comprador De Celulares"
];

const RelatedSearches = () => {
  return (
    <div className="bg-background-secondary pt-6 pb-8">
      <section className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-[22px] font-light text-text-primary mb-4">
          Termos mais procurados
        </h2>
        <p className="text-sm leading-7">
          {searchTerms.map((term, index) => (
            <React.Fragment key={term}>
              <a href="#" className="text-primary hover:text-interactive-hover hover:underline">
                {term}
              </a>
              {index < searchTerms.length - 1 && (
                <span className="text-text-tertiary"> - </span>
              )}
            </React.Fragment>
          ))}
        </p>
      </section>
    </div>
  );
};

export default RelatedSearches;