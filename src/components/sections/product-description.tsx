import React from 'react';

const ProductDescription = () => {
  return (
    <section id="description" className="bg-card p-6 md:p-8 rounded-md border border-border card-shadow">
      <h2 className="text-2xl font-semibold text-text-primary mb-6">
        Descrição
      </h2>
      <div className="text-base text-text-primary leading-6 space-y-4">
        <p>
          Com seu console PlayStation 2 você terá entretenimento garantido todos os dias. Sua tecnologia foi criada para colocar novos desafios para jogadores novatos e especialistas.
        </p>
        <p>
          Graças às suas pequenas dimensões, o seu consumo de energia é baixo, o que o torna um produto económico e acessível.
        </p>
        <p>
          Não só isso, o controle DualShock combina recursos revolucionários e sem precedentes, preservando a precisão, conforto e exatidão em cada movimento.
        </p>
        <p>
          Adaptado às suas necessidades
        </p>
        <p>
          Por outro lado, tem uma porta USB e saída HDMI, que permitem conectar acessórios e carregar a bateria do controle enquanto você joga.
        </p>
      </div>
    </section>
  );
};

export default ProductDescription;