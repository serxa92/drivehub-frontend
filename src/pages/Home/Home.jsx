import { useLanguage } from "../../context/LanguageContext";
import { useCars } from "../../hooks/useCars";
import { getCarImage } from "../../utils/carImages";
import { capitalize } from "../../utils/capitalize";
import CarCard from "../../components/CarCard/CarCard";
import Contact from "../Contact/Contact";
import "./Home.css";

const Home = () => {
  const { t } = useLanguage();
  const { cars, loading, error } = useCars();

  if (loading) {
    return <p style={{ padding: "2rem" }}>Loading cars...</p>;
  }

  if (error) {
    return <p style={{ padding: "2rem" }}>{error}</p>;
  }

  return (
    <section className="home">
      <section className="hero">
        <div className="hero__content">
          <span className="hero__eyebrow">{t.heroEyebrow}</span>

          <h1>{t.heroTitle}</h1>

          <p>{t.heroText}</p>

          <form className="search-panel">
            <div className="search-panel__field">
              <label>{t.searchBrand}</label>
              <select>
                <option>{t.allBrands}</option>
                <option>BMW</option>
                <option>Audi</option>
                <option>Volkswagen</option>
                <option>Mercedes</option>
              </select>
            </div>

            <div className="search-panel__field">
              <label>{t.searchMaxPrice}</label>
              <select>
                <option>{t.anyPrice}</option>
                <option>20.000€</option>
                <option>40.000€</option>
                <option>60.000€</option>
              </select>
            </div>

            <div className="search-panel__field">
              <label>{t.searchYear}</label>
              <select>
                <option>{t.anyYear}</option>
                <option>2020+</option>
                <option>2015+</option>
                <option>2010+</option>
              </select>
            </div>

            <button type="submit">{t.searchCars}</button>
          </form>

          <div className="hero__benefits">
            <article>
              <span>✓</span>
              <div>
                <strong>{t.verifiedCars}</strong>
                <p>{t.verifiedCarsText}</p>
              </div>
            </article>

            <article>
              <span>€</span>
              <div>
                <strong>{t.noHiddenFees}</strong>
                <p>{t.noHiddenFeesText}</p>
              </div>
            </article>

            <article>
              <span>24</span>
              <div>
                <strong>{t.personalSupport}</strong>
                <p>{t.personalSupportText}</p>
              </div>
            </article>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image" />

          <article className="featured-card">
            <span>{t.featured}</span>
            <h2>Porsche Panamera Turbo</h2>
            <p>2019 · 38.500 km · 550 cv</p>

            <div className="featured-card__bottom">
              <strong>123.000€</strong>
              <a href="/cars/1">{t.viewDetails}</a>
            </div>
          </article>
        </div>
      </section>

      <section className="recent">
        <div className="recent__header">
          <span>{t.recentlyAdded}</span>
          <a href="#cars">{t.viewAllCars}</a>
        </div>

        <div className="car-grid" id="cars">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
