import { ButtonEnergy } from "../Button-Energy";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <ButtonEnergy url="www.google.com" children="D10GO" />
      <ButtonEnergy url="https://github.com/DiogoRocha10" children="GitHub" />
      <ButtonEnergy
        url="https://www.linkedin.com/in/diogorochaa/"
        children="Linkedin"
      />
    </header>
  );
};
