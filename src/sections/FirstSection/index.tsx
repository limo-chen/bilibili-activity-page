import { FC } from "react";
import banner from "../../assets/banner.jpg";
import styles from "./styles.module.scss";

const FirstSection: FC = () => {
  return (
    <div className={styles.firstSection}>
      <img src={banner} alt="banner" />
    </div>
  );
};
export default FirstSection;
