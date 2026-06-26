import { getCarImage } from "../../utils/carImages";
import { capitalize } from "../../utils/capitalize";
import { FiHeart } from "react-icons/fi";
import "./CarCard.css";

const CarCard = ({ car }) => {
  return (
    <article className="car-card">
      <div
        className="car-card__image"
        style={{
          backgroundImage: `url(${car.image || getCarImage(car.brand)})`,
        }}
      >
        <button type="button" aria-label="Add to favorites">
          <FiHeart />
        </button>
      </div>

      <div className="car-card__content">
        <h3>
          {capitalize(car.brand)} {capitalize(car.model)}
        </h3>

        <p>
          {car.year} · {car.mileage} km
        </p>

        <strong>
          {car.notes ? capitalize(car.notes) : "Available now"}
        </strong>
      </div>
    </article>
  );
};

export default CarCard;