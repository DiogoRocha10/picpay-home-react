import styles from "./home.module.css";
import Logo from "../../images/logo.png";
import Img from "../../images/isa.png";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={Logo} alt="logo picpay" />

        <a href="google.com">Para você</a>
        <a href="google.com">Para seu Negócio</a>
        <a href="google.com">Central de Ajuda</a>
        <a href="google.com">Sobre o PicPay</a>
        <a href="google.com">Blog</a>

        <button>Baixe o app</button>
      </div>

      <div className={styles.main}>
        <h1>Descubra o universo de facilidades do PicPay</h1>
        <p>
          Com o PicPay é assim: pode parcelar seus boletos em até 12x, ter uma
          conta digital segura e gratuita, cartão de crédito sem anuidade e
          ainda ganhar dinheiro de volta em suas compras.
        </p>
        <div className={styles.divButton}>
          <button className={styles.button}>Baixe o app</button>
        </div>
      </div>
      <div className={styles.aside}>
        <img src={Img} alt="isa" />
      </div>
    </div>
  );
}
