import styles from './Sobre.module.css';
import avatar from './images/foto.png';
import html from './images/html.svg';
import css from './images/css.svg';
import js from './images/js.svg';
import python from './images/python.svg';
import django from './images/django.svg';
import react from './images/biblioteca.svg';
import sql from './images/sql.svg';

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt='Avatar' className={styles.avatar} />
        <div className={styles.textos}>
          <h2>Sobre</h2>

          <p>
            Sou <span> João Pedro </span>
            <br />
            <strong> Dev Full Stack e DBA </strong>
          </p>

          <p>
            Bacharel em Sistemas de informação e com pós graduação em <br />{' '}
            Administração de banco de dados
          </p>
          <p>Sou apaixonado por transformar ideias em realidade digital.</p>

          <p>
            Experiência em criação de aplicações dinâmicas e intuitivas, com
            foco na experiência do usuário.
            <br /> Além de trabalhos pessoais com desenvolvimento e
            administração em banco de dados
          </p>
        </div>
      </div>

      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <img src={html} alt='Ícone do HTML' />
          <img src={css} alt='Ícone do CSS' />
          <img src={js} alt='Ícone do JS' />
          <img src={python} alt='Ícone do PYTHON' />
          <img src={django} alt='Ícone do DJANGO' />
          <img src={react} alt='Ícone do REACT' />
          <img src={sql} alt='Ícone do SQL' />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
