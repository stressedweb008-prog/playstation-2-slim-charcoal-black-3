import Image from 'next/image';

const featuresData = [
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/svgs/tipo_de_consola_game-1.svg',
    key: 'Tipo de console:',
    value: 'De mesa',
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/svgs/cantidad_de_controles_incluidos_game-2.svg',
    key: 'Quantidade de controles incluídos:',
    value: '1',
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/svgs/con_wi_fi_game-3.svg',
    key: 'Com Wi-Fi:',
    value: 'Não',
  },
];

const ProductKeyFeatures = () => {
  return (
    <div className="mt-4 pt-4 border-t border-border">
      <h2 className="text-[16px] leading-tight font-semibold text-text-primary mb-3">
        O que você precisa saber sobre este produto
      </h2>
      <div className="divide-y divide-border">
        {featuresData.map((feature) => (
          <div key={feature.key} className="flex items-center gap-3 py-2">
            <Image 
              src={feature.icon} 
              alt=""
              width={24} 
              height={24}
              className="flex-shrink-0"
            />
            <p className="text-sm leading-tight text-text-primary">
              {feature.key}{' '}
              <span className="font-semibold">{feature.value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductKeyFeatures;