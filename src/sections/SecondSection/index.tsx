import { FC } from "react";
import food from "../../assets/food.jpg";
import life from "../../assets/life.jpg";
import movie from "../../assets/movie.png";
import cartoon from "../../assets/cartoon.jpg";
import styles from "./styles.module.scss";

const SecondSection: FC = () => {
  return (
    <div className={styles.secondSection}>
      <ul>
        <li>CARTOON</li>
        <li>FOOD</li>
        <li>MOVIE</li>
        <li>LIFE</li>
      </ul>

      <div>
        <section>
          <h2>CARTOON</h2>
          <img src={cartoon} alt="cartoon" />
        </section>
        <section>
          <h2>FOOD</h2>
          <img src={food} alt="food" />
        </section>
        <section>
          <h2>MOVIE</h2>
          <img src={movie} alt="movie" />
        </section>
        <section>
          <h2>LIFE</h2>
          <img src={life} alt="life" />
        </section>
      </div>
    </div>
  );
};
export default SecondSection;
