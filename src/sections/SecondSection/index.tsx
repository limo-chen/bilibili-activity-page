import { FC, useState, useRef, useEffect } from "react";
import food from "../../assets/food.jpg";
import life from "../../assets/life.jpg";
import movie from "../../assets/movie.png";
import cartoon from "../../assets/cartoon.jpg";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.png";
import classNames from "classnames";

const tabs = [
  {
    key: "cartoon",
    title: "CARTOON",
    img: cartoon,
  },
  {
    key: "food",
    title: "FOOD",
    img: food,
  },
  {
    key: "movie",
    title: "MOVIE",
    img: movie,
  },
  {
    key: "life",
    title: "LIFE",
    img: life,
  },
];

const SecondSection: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("cartoon");

  const SecondSectionRef = useRef<HTMLDivElement>(null);

  const [isFixed, setIsFixed] = useState<boolean>(false);
  const activate = (key: string) => {
    setActiveTab(key);
    const tabContentEl = document.querySelector(`[data-id=${key}]`);
    if (tabContentEl) {
      tabContentEl.scrollIntoView({});
    }
  };
  // 如果SecondSectionRef.current存在，
  const onScroll = () => {
    if (SecondSectionRef.current) {
      const { top } = SecondSectionRef.current.getBoundingClientRect();
      // 吸顶
      setIsFixed(top <= 0);
      // 注意这里的sectionNodes是一个NodeList，不是数组，所以不能用forEach,需要转换成数组
      // Array.from转换为数组
      // 通过getBoundingClientRect这个方法区拿到top值，然后判断是否小于0，如果小于0就是吸顶状态，然后通过scrollIntoView方法，让对应的section滚动到可视区域。
      const sectionNodes = SecondSectionRef.current.querySelectorAll("section");
      Array.from(sectionNodes).forEach((sectionEl) => {
        const { top } = sectionEl.getBoundingClientRect();
        const key = sectionEl.getAttribute("data-id") || "";
        if (top <= 56) {
          setActiveTab(key);
        }
      });
    }
  };
  // onScroll传给他,同时监听onScroll，当这个组件销毁的时候removeEventListener掉,
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div className={styles.secondSection} ref={SecondSectionRef}>
      {/* 传一个对象进去 isFixed是类名，后面的是状态 */}
      <ul className={classNames({ [styles.isFixed]: isFixed })}>
        {tabs.map((tab) => {
          return (
            <li key={tab.key} onClick={() => activate(tab.key)}>
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
        {tabs.map((tab) => (
          <section data-id={tab.key}>
            <h2>{tab.title}</h2>
            <img src={tab.img} alt={tab.key} />
          </section>
        ))}
      </div>

      {/* 吸底按钮 */}
      <div
        className={classNames(styles.btnWrapper, { [styles.visible]: isFixed })}
      >
        <img src={logo} alt="logo" />
        <a href="https://www.bilibili.com/" target="_blank">
          <button>App内打开</button>
        </a>
      </div>
    </div>
  );
};
export default SecondSection;
