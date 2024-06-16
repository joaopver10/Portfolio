import styles from './Contatos.module.css';
import { MdMailOutline } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';

function Contatos() {
  return (
    <section className={styles.contatos}>
      <h2>Contatos</h2>
      <h3>Entre em contato</h3>
      <p>Para que possamos conversar mais sobre</p>

      <div className={styles.icones}>
        <a
          href='mailto:joaopver10@outlook.com'
          target='_blank'
          rel='noopener noreferrer'>
          <MdMailOutline className={styles.icone} />
        </a>
        <a
          href='https://www.linkedin.com/in/joao-pedro-vitorino/'
          target='_blank'
          rel='noopener noreferrer'>
          <CiLinkedin className={styles.icone} />
        </a>
        <a
          href='https://github.com/joaopver10'
          target='_blank'
          rel='noopener noreferrer'>
          <VscGithub className={styles.icone} />
        </a>
      </div>
    </section>
  );
}

export default Contatos;
