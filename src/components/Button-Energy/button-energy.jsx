import styles from "./button-energy.module.css";

interface ButtonEnergyProps {
  url?: string;
  children: string;
}

export const ButtonEnergy = ({ url, children }: ButtonEnergyProps) => {
  return (
    <div className={styles.container}>
      <a href={url}>
        <span>{children}</span>
      </a>
    </div>
  );
};
