import Image from 'next/image';

const ProductSellerInfo = () => {
  return (
    <div className="mt-8 rounded-lg border border-border bg-card p-4 shadow-sm">
      <p className="text-sm text-text-secondary">
        Vendido por <a href="#" className="font-normal text-primary hover:text-interactive-hover no-underline hover:underline">World Games</a>
      </p>

      <div className="mt-4 flex items-center">
        <div className="text-center pr-4">
          <p className="text-lg font-semibold text-text-primary leading-none">+5</p>
          <p className="mt-1 text-xs text-text-secondary">Produtos</p>
        </div>
        
        <div className="h-10 border-l border-border"></div>
        
        <div className="text-center px-4">
          <p className="text-lg font-semibold text-text-primary leading-none">+100</p>
          <p className="mt-1 text-xs text-text-secondary">Vendas</p>
        </div>
        
        <div className="h-10 border-l border-border"></div>

        <div className="pl-4">
          <div className="flex items-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/svgs/message-positive-v2-4.svg"
              alt="Green checkmark icon"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span className="ml-2 text-sm text-text-primary">Bom atendimento</span>
          </div>
          <div className="mt-2.5 flex items-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/svgs/time-negative-v2-5.svg"
              alt="Red clock icon"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span className="ml-2 text-sm text-text-primary">Entrega rápida</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSellerInfo;