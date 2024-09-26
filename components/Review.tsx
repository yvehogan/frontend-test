import React from 'react';
import { Star } from 'lucide-react';

const Review = () => {
  const rating = 4;
  const maxRating = 5;

  return (
    <div className="bg-white rounded-sm shadow-md p-6 w-full border-2 [#F2F2F2]">
      <h3 className="text-xl font-semibold mb-2 text-textColor">Give this chapter a star</h3>
      <p className="text-textGray mb-4">
        (1 is disappointing, 5 is great)
      </p>
      <div className="flex gap-2 justify-center items-center mb-2">
        {[...Array(maxRating)].map((_, index) => (
          <Star
            key={index}
            className={`w-6 h-6 ${
              index < rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;