import { Star, StarHalf } from "lucide-react";

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating); // Get whole number stars
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="flex items-center gap-[5px] text-yellow-500 py-1">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={15} fill="currentColor" />
      ))}

      {/* Half Star */}
      {hasHalfStar && <StarHalf key="half" size={15} fill="currentColor" />}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={15} className="text-gray-300" />
      ))}

      {/* Rating Number */}
      <span className="text-gray-600 text-sm ml-1">({rating})</span>
    </div>
  );
};

export default StarRating;
