import { Star, ThumbsUp, ThumbsDown, User } from 'lucide-react';

type Review = {
  rating: number;
  text: string;
  votes: number;
  date: string;
};

const reviews: Review[] = [
  {
    rating: 5,
    text: 'Muito bom.',
    votes: 189,
    date: '04 abr. 2024',
  },
  {
    rating: 5,
    text: 'Valeu muito a pena, o produto é novo, funciona perfeitamente e ainda vem 3 jogos de brinde, agora é só aproveitar a nostalgia.',
    votes: 126,
    date: '20 set. 2023',
  },
  {
    rating: 5,
    text: 'não testei o cabo RCA pois uso HDMI. Em questão de custo-benefício está ótimo, pois já vai com OPL instalado e vários jogos na memória, evitando gastos extras com HD ou pendrive. Funciona perfeitamente, o controle é paralelo, mas para quem é realmente fã do PS2 pode comprar sem medo. Super recomendo para presentear alguém que é fã!',
    votes: 75,
    date: '01 set. 2023',
  },
  {
    rating: 5,
    text: 'Recomendo a compra, mas o controle não é original. O resto está funcionando perfeitamente até agora.',
    votes: 51,
    date: '16 jul. 2024',
  },
  {
    rating: 4,
    text: 'O PlayStation 2 chegou em ótimo estado e funciona muito bem! Tive uma pequena dúvida no começo, mas o suporte foi ágil e resolveu rapidamente, trocando o controle. Agora está tudo funcionando perfeitamente. Ótima experiência, recomendo!',
    votes: 38,
    date: '01 dez. 2023',
  },
];

const StarRating = ({ rating, totalStars = 5 }: { rating: number; totalStars?: number }) => (
  <div className="flex items-center" aria-label={`Avaliação: ${rating} de ${totalStars} estrelas`}>
    {Array.from({ length: totalStars }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? 'text-star-rating fill-star-rating'
            : 'text-border-strong fill-border-strong'
        }`}
        aria-hidden="true"
      />
    ))}
  </div>
);

const ProductReviewsHighlighted = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-text-primary mb-6">
        Opiniões em destaque
      </h3>

      <div className="flex flex-col">
        {reviews.map((review, index) => (
          <div key={index} className="flex gap-4 py-6 border-t border-border-default first:pt-0 last:border-b-0">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-background-tertiary rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-text-tertiary" />
              </div>
            </div>
            <div className="flex-1">
              <StarRating rating={review.rating} />
              <p className="mt-2 text-sm text-text-primary leading-snug">
                {review.text}
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-4 text-text-secondary">
                  <div className="flex items-center gap-2">
                    <button aria-label="Útil" className="text-text-secondary hover:text-interactive-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm p-1 -m-1">
                      <ThumbsUp className="w-4 h-4" />
                    </button>
                    <span className="text-sm">{review.votes}</span>
                  </div>
                  <button aria-label="Não útil" className="text-text-secondary hover:text-interactive-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm p-1 -m-1">
                    <ThumbsDown className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-xs text-text-tertiary">{review.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviewsHighlighted;