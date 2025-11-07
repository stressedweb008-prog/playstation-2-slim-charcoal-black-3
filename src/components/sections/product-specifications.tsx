"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SpecificationItem {
  label: string;
  value: string;
}

interface SpecificationCategory {
  title: string;
  items: SpecificationItem[];
}

const specificationCategories: SpecificationCategory[] = [
  {
    title: "Características gerais",
    items: [
      { label: "Marca", value: "Sony" },
      { label: "Linha", value: "PlayStation" },
      { label: "Modelo", value: "PlayStation 2" },
      { label: "Submodelo", value: "Slim" },
      { label: "Cor", value: "Charcoal black" },
      { label: "Modelo detalhado", value: "Black" },
    ],
  },
  {
    title: "Especificações",
    items: [
      { label: "Tipo de console", value: "De mesa" },
      { label: "Acessórios incluídos", value: "Cabo AV, cabo fonte, Controle, Manuais" },
      { label: "Aplicações suportadas", value: "Nenhum" },
      { label: "Tipo de alimentação", value: "Corrente elétrica" },
      { label: "Emulador", value: "Não" },
      { label: "Inclui jogos", value: "Não" },
    ],
  },
  {
    title: "Tela",
    items: [
      { label: "Com tela tátil", value: "Não" },
      { label: "Com tela", value: "Não" },
      { label: "Mínimas resoluções das telas", value: "1920 px x 1080 px" },
    ],
  },
  {
    title: "Memória",
    items: [
      { label: "Tipos de cartões de memória", value: "PS2 Memory Card" },
      { label: "Tipos de memória", value: "RDRAM" },
      { label: "Memória RAM", value: "32 MB" },
      { label: "Memória VRAM", value: "256 MB" },
    ],
  },
  {
    title: "Conectividade",
    items: [
      { label: "Conectividade de rede móvel", value: "4G" },
      { label: "Com Wi-Fi", value: "Não" },
      { label: "Com HDMI", value: "Sim" },
      { label: "Com USB", value: "Sim" },
      { label: "Com conector jack 3.5 mm", value: "Não" },
      { label: "Com S/PDIF", value: "Sim" },
      { label: "Com Bluetooth", value: "Sim" },
    ],
  },
  {
    title: "Bateria",
    items: [],
  },
  {
    title: "Controles",
    items: [
      { label: "Inclui controles", value: "Sim" },
      { label: "Quantidade de controles incluídos", value: "1" },
      { label: "Conectividades dos controles", value: "Com fio" },
    ],
  },
  {
    title: "Processador",
    items: [
      { label: "CPU", value: "Cell Broadband Engine" },
      { label: "GPU", value: "Graphics Synthesizer" },
      { label: "Velocidade do processador", value: "147 GHz" },
    ],
  },
  {
    title: "Peso e dimensões",
    items: [
      { label: "Altura x Largura x Profundidade", value: "20.3 cm x 15.2 cm x 2.8 cm" },
    ],
  },
  {
    title: "Outros",
    items: [
      { label: "Eficiência energética", value: "A" },
      { label: "Regime de comercialização", value: "Fabricante, Sony" },
      { label: "Quantidade de portas USB", value: "2" },
      { label: "Com saída de video", value: "Sim" },
    ],
  },
];

const ProductSpecifications = () => {
  const defaultOpenItems = specificationCategories
    .filter(category => category.items.length > 0)
    .map(category => category.title);

  return (
    <div id="product-specifications" className="mt-8 bg-white rounded-md border border-border-default card-shadow">
      <div className="p-6 border-b border-border-default">
        <h2 className="text-2xl font-semibold text-text-primary">
          Características do produto
        </h2>
      </div>
      
      <Accordion type="multiple" defaultValue={defaultOpenItems} className="w-full">
        {specificationCategories.map((category) => (
          <AccordionItem value={category.title} key={category.title} className="border-b-0 data-[state=open]:border-b-0">
            <AccordionTrigger className="text-lg font-normal text-text-primary px-6 py-4 hover:no-underline border-b border-border-default text-left [&[data-state=open]>svg]:rotate-180">
              {category.title}
            </AccordionTrigger>
            <AccordionContent className="p-0">
              {category.items.length > 0 ? (
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {category.items.map((item, itemIndex) => (
                      <tr key={item.label} className="border-t border-border-default first:border-t-0">
                        <th className="font-normal text-text-primary text-left align-top py-4 px-6 bg-background-secondary w-[40%]">
                          {item.label}
                        </th>
                        <td className="text-text-secondary py-4 px-6 bg-white">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ProductSpecifications;