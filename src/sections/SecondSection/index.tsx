import { FC, useState } from "react";
import food from "../../assets/food.jpg";
import life from "../../assets/life.jpg";
import movie from "../../assets/movie.png";
import cartoon from "../../assets/cartoon.jpg";
import styles from "./styles.module.scss";
import classNames from "classnames";

const tabs = [
  {
    key: "cartoon",
    title: "CARTOON",
  },
  {
    key: "food",
    title: "FOOD",
  },
  {
    key: "movie",
    title: "MOVIE",
  },
  {
    key: "life",
    title: "LIFE",
  },
];

const SecondSection: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("cartoon");

  return (
    <div className={styles.secondSection}>
      <ul>
        {tabs.map((tab) => {
          return (
            <li key={tab.key} onClick={() => setActiveTab(tab.key)}>
              <span>{tab.title}</span>
              <span
                className={classNames(styles.line, {
                  [styles.visible]: activeTab === tab.key,
                })}
              ></span>
            </li>
          );
        })}
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
