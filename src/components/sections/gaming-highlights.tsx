import React from 'react';

const playstationLinks = [
  { name: 'Ps5', href: '#' },
  { name: 'Ps4', href: '#' },
  { name: 'Ps4 pro', href: '#' },
  { name: 'Ps3', href: '#' },
  { name: 'Ps vita', href: '#' },
  { name: 'Psp', href: '#' },
];

const nintendoLinks = [
  { name: 'Nintendo 3ds', href: '#' },
  { name: 'Nintendo switch consoles', href: '#' },
  { name: 'Steam deck', href: '#' },
];

const xboxLinks = [
  { name: 'Xbox series s', href: '#' },
  { name: 'Xbox series x', href: '#' },
  { name: 'Xbox series z', href: '#' },
  { name: 'Xbox one', href: '#' },
  { name: 'Xbox 360', href: '#' },
];

const GamingHighlights = () => {
  return (
    <div className="mt-8 pt-8 border-t border-border-default">
      <h2 className="text-[22px] font-normal text-text-primary mb-6">
        Destaques em Games
      </h2>
      <div className="grid grid-cols-3 gap-x-4">
        <div>
          <h4 className="text-sm font-normal text-text-primary mb-3">PlayStation</h4>
          <ul className="flex flex-col gap-y-3">
            {playstationLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm text-interactive-primary hover:text-interactive-hover hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-normal text-text-primary mb-3">Nintendo</h4>
          <ul className="flex flex-col gap-y-3">
            {nintendoLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm text-interactive-primary hover:text-interactive-hover hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-normal text-text-primary mb-3">Xbox</h4>
          <ul className="flex flex-col gap-y-3">
            {xboxLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm text-interactive-primary hover:text-interactive-hover hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GamingHighlights;