import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

export default function ProductItems({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={`/product/${id}`}
      className="text-gray-700 cursor-pointer no-underline block"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-full object-cover transition duration-300"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            transform: hover ? "scale(1.1)" : "scale(1)",
          }}
        />
      </div>

      {/* Name */}
      <p className="mt-2 mb-0 text-sm leading-tight">
        {name}
      </p>

      {/* Price */}
      <p className="text-sm font-medium leading-tight">
        {currency}{price}
      </p>
    </Link>
  );
}
