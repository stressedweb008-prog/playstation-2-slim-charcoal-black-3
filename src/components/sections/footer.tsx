import { Accessibility } from 'lucide-react';

const Footer = () => {
  const links = [
    { href: '#', text: 'Trabalhe conosco' },
    { href: '#', text: 'Termos e condições' },
    { href: '#', text: 'Promoções' },
    { href: '#', text: 'Como cuidamos da sua privacidade' },
    {
      href: '#',
      text: 'Acessibilidade',
      icon: <Accessibility size={16} className="text-interactive-primary" />,
    },
    { href: '#', text: 'Contato' },
    { href: '#', text: 'Informações sobre seguros' },
    { href: '#', text: 'Programa de Afiliados' },
    { href: '#', text: 'Lista de presentes' },
  ];

  return (
    <footer className="bg-white border-t border-border pt-4 sm:pt-6 pb-4 mt-auto">
      <div className="mx-auto max-w-[1200px] px-3 sm:px-4">
        <nav>
          <ul className="mb-3 sm:mb-4 flex flex-wrap items-center gap-x-3 sm:gap-x-6 gap-y-2 text-xs">
            {links.map(({ href, text, icon }) => (
              <li key={text}>
                <a
                  href={href}
                  className="flex items-center gap-1.5 text-text-primary transition-colors hover:text-interactive-primary"
                >
                  {icon}
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-1 text-[11px] sm:text-xs text-text-tertiary">
          <p>Copyright © 1999-2025 Ebazar.com.br LTDA.</p>
          <p className="leading-relaxed">
            CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003,
            Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;