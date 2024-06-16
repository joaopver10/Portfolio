import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.apresentacao}>
            <p>
                Olá, sou o <br />
                <span>João Pedro</span> <br />
                Dev Full Stack e DBA
            </p>
            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                Saiba mais
            </Link>
            </div>
            <figure>
            <img className={styles.img_home} src="/developer.svg" alt="Imagem de Home" />
            </figure>
        </section>
    )
}

export default Home
