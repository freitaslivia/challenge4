
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Cabecalho.module.css';
import botaoStyles from '../../styles/Botao.module.css'; 

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logo-horizontal.svg"
            alt="Logo com a escrita Porto em azul e fundo transparente"
            width={88}
            height={20}
          />
        </Link>
      </div>
      <div className={styles.navigation}>
        <ul className={styles.navUl}>
          <li className={styles.navLi}>
            <Link href="#passo-a-passo">Passo a Passo</Link>
          </li>
          <li className={styles.navLi}>
            <Link href="#seguro-bike">Seguro Porto Bike</Link>
          </li>
          <li className={styles.navLi}>
            <Link href="#equipe">Equipe</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link href="/login">
          
          <button className={`${botaoStyles.botao} ${botaoStyles.outlined}`}>Vistoria</button>
        </Link>
      </div>
    </header>
  );
}
