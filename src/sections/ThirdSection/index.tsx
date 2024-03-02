import { FC } from "react";
import title1 from "../../assets/title1.jpg";
import title2 from "../../assets/title2.jpg";
import comment from "../../assets/comment.jpg";
import styles from "./styles.module.scss";

const ThirdSection: FC = () => {
  return (
    <div className={styles.ThirdSection}>
      <img src={title1} alt="title1" />
      <img className={styles.commit} src={comment} alt="comment" />
      <img src={title2} alt="title2" />
      <img className={styles.commit} src={comment} alt="comment" />
    </div>
  );
};
export default ThirdSection;
