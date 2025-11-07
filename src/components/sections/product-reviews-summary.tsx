import React from 'react';
import { Star } from 'lucide-react';

const distributionData = [
  { stars: 5, percentage: 68 },
  { stars: 4, percentage: 22 },
  { stars: 3, percentage: 6 },
  { stars: 2, percentage: 2 },
  { stars: 1, percentage: 2 },
];

const featureRatingsData = [
  { name: 'Custo-benefício', rating: 4.0 },
  { name: 'Qualidade da imagem', rating: 4.0 },
  { name: 'Qualidade do som', rating: 4.1 },
  { name: 'Durabilidade', rating: 4.1 },
  { name: 'Velocidade de uso', rating: 4.1 },
];

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  size?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  totalStars = 5,
  size = 16,
  className,
}) => {
  const roundedRating = Math.round(rating);
  const starsArray = Array.from({ length: totalStars }, (_, i) => {
    const isFilled = i < roundedRating;
    return (
      <Star
        key={i}
        size={size}
        className={isFilled ? 'text-interactive-primary' : 'text-border-default'}
        fill={isFilled ? 'currentColor' : 'none'}
        strokeWidth={1.5}
      />
    );
  });
  return <div className={`flex items-center gap-0.5 ${className}`}>{starsArray}</div>;
};

const ProductReviewsSummary = () => {
  return (
    <section className="bg-background-primary p-6 rounded-md shadow-sm w-full">
      <h2 className="text-2xl font-normal text-text-primary mb-6">Opiniões do produto</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        
        {/* Left Column: Overall score and distribution */}
        <div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 text-left pt-1">
              <p className="text-[44px] font-light text-text-primary leading-none">4.9</p>
              <p className="text-sm text-text-secondary whitespace-nowrap mt-2">160 avaliações</p>
            </div>
            
            <div className="flex-grow pt-2">
              <ul className="space-y-1">
                {distributionData.map((item) => (
                  <li key={item.stars} className="flex items-center gap-2">
                    <span className="text-xs text-interactive-primary w-2 text-right">{item.stars}</span>
                    <Star size={12} className="text-interactive-primary" fill="currentColor" />
                    <div className="w-full bg-background-tertiary h-[6px] rounded-sm">
                      <div className="bg-border-strong h-full rounded-sm" style={{ width: `${item.percentage}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Right Column: Feature Ratings */}
        <div>
           <h3 className="text-base font-normal text-text-primary mb-4">Avaliação de características</h3>
           <ul className="space-y-3">
              {featureRatingsData.map((feature) => (
                  <li key={feature.name} className="flex justify-between items-center">
                      <p className="text-sm text-text-secondary">{feature.name}</p>
                      <StarRating rating={feature.rating} size={20} />
                  </li>
              ))}
           </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductReviewsSummary;