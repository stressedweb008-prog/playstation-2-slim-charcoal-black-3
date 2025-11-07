import Image from 'next/image';

const ProductPaymentMethods = () => {
  return (
    <div className="mt-4 rounded-md border border-border bg-background p-6 card-shadow">
      <h3 className="mb-5 text-lg font-normal text-text-primary">
        Meios de pagamento
      </h3>
      <ul className="space-y-4">
        <li className="flex items-center gap-4">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/svgs/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m-9.svg"
            alt="Ícone Linha de Crédito"
            width={24}
            height={28}
          />
          <p className="text-sm text-text-primary">Linha de Crédito</p>
        </li>
        <li className="flex items-start gap-4">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/svgs/f3e8e940-f549-11ef-bad6-e9962bcd76e5-m-6.svg"
            alt="Ícone Cartões de crédito"
            width={24}
            height={16}
            className="mt-0.5"
          />
          <div>
            <p className="text-sm text-text-primary">Cartões de crédito</p>
            <p className="text-xs text-text-secondary">Pague em até 12x!</p>
          </div>
        </li>
        <li className="flex items-center gap-4">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/svgs/ddf23a60-f3bd-11eb-a186-1134488bf456-m-7.svg"
            alt="Ícone Pix"
            width={24}
            height={24}
          />
          <p className="text-sm text-text-primary">Pix</p>
        </li>
        <li className="flex items-center gap-4">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e996bedc-b6a6-4a58-b4eb-74a857e8c1b9-mercadolivre-com-br/assets/svgs/bb7c7bb0-adec-11f0-92e6-59fb0bcb38c2-m-8.svg"
            alt="Ícone Boleto bancário"
            width={24}
            height={16}
          />
          <p className="text-sm text-text-primary">Boleto bancário</p>
        </li>
      </ul>
      <a
        href="#"
        className="mt-4 block text-sm text-interactive-primary hover:text-interactive-hover hover:underline"
      >
        Confirmar outros meios de pagamento
      </a>
      <p className="mt-3 text-sm text-text-primary">
        <span className="font-semibold text-[#00A650]">Receba grátis</span> entre quarta-feira e sexta-feira
      </p>
    </div>
  );
};

export default ProductPaymentMethods;