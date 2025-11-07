import React from 'react';

const AlphabeticalSearch = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="bg-background-secondary py-6">
      <div className="container text-center">
        <h2 className="text-base text-text-primary mb-4 font-normal">
          Pesquise produto por letra inicial
        </h2>
        <div className="text-sm leading-relaxed">
          {alphabet.map((letter, index) => (
            <React.Fragment key={letter}>
              <a
                href={`https://www.mercadolivre.com.br/mapa-do-site/produtos-${letter}`}
                className="text-primary"
              >
                {letter}
              </a>
              {index < alphabet.length - 1 && (
                <span className="text-text-secondary"> - </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlphabeticalSearch;