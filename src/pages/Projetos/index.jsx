import {
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { TbBrandDjango } from 'react-icons/tb';
import styles from './Projetos.module.css';

function Projetos() {
  return (
    <section className={styles.projetos}>
      <h2>Projetos</h2>
      <section className={styles.lista}>
        <section className={styles.card}>
          <h3>Projeto Educa+</h3>
          <p>
            Esse projeto foi o TCC voltado para tecnologia na área da educação,
            eu fiz um sistema que seria para o professor cadastrar quiz e os
            alunos teriam sua conta com uma pontuação, o intuito era incentivar
            o estudo através de um quiz que no final você recebesse algo e
            tornasse mais atrativo a forma de aprender.
          </p>
          <div className={styles.card_footer}>
            <div className={styles.card_icones}>
              <FaPython />
              <TbBrandDjango />
              <FaDatabase />
              <FaHtml5 />
              <FaCss3Alt />
              <FaJs />
            </div>
            <a
              href={'https://pca-fabrica-de-software.vercel.app'}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.botao}>
              <BsArrowRight />
            </a>
          </div>
        </section>

        <section className={styles.card}>
          <h3>Projeto To-Do-List</h3>
          <p>
            Projeto que foi feito como trabalho pessoal e aproveitado como
            trabalho acadêmico no 6º período, foi desenvolvido com python,
            Django e um banco relacional. Falta ainda algumas melhorias e
            criação de abas que não foram terminadas até o momento, além de
            refatoração que ainda vai ser feita.
          </p>
          <div className={styles.card_footer}>
            <div className={styles.card_icones}>
              <FaPython />
              <TbBrandDjango />
              <FaDatabase />
              <FaHtml5 />
              <FaCss3Alt />
              <FaJs />
            </div>
            <a
              href={'https://to-do-list-sa4k.onrender.com'}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.botao}>
              <BsArrowRight />
            </a>
          </div>
        </section>

        <section className={styles.card}>
          <h3>Projeto LojaDeGames</h3>
          <p>
            Fiz esse projeto para testar as minhas habilidades fazendo um crud,
            apesar de relativamente ser um site simples eles possui muitas
            funcionalidades, é o projeto pessoal mais recente que tenho.
          </p>
          <div className={styles.card_footer}>
            <div className={styles.card_icones}>
              <FaPython />
              <TbBrandDjango />
              <FaDatabase />
              <FaHtml5 />
              <FaCss3Alt />
              <FaJs />
            </div>
            <a
              href={'https://projeto-loja-de-games-lemon.vercel.app'}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.botao}>
              <BsArrowRight />
            </a>
          </div>
        </section>

        <section className={styles.card}>
          <h3>Projeto LifeGuardian </h3>
          <p>
            Primeiro projeto mobile desenvolvido com intuito de ajudar pessoas
            que sentem medo ao andar na rua e também para pessoas que acham
            estar correndo perigo, ele se encontra pausado atualmente e vai ser
            refeito do zero com o conhecimento que possuo hoje em dia.{' '}
          </p>
          <div className={styles.card_footer}>
            <div className={styles.card_icones}>
              <FaJs />
              <FaReact />
            </div>
            <a
              href={'https://github.com/joaopver10/LifeGuardian'}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.botao}>
              <BsArrowRight />
            </a>
          </div>
        </section>

        <section className={styles.card}>
          <h3>Projeto Healthmental</h3>
          <p>
            Trabalho do 2º período da faculdade. Na pandemia resolvi desenvolver
            um site para saúde mental utilizando apenas HTML, CSS e um
            formulário para entrar em contato comigo, os artigos se encontram
            indisponível pois estou reformulando as paginas com o conhecimento
            que tenho hoje sobre desenvolvimento.
          </p>
          <div className={styles.card_footer}>
            <div className={styles.card_icones}>
              <FaHtml5 />
              <FaCss3Alt />
            </div>
            <a
              href={'https://joaopver10.github.io/Projeto-HealthMental/'}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.botao}>
              <BsArrowRight />
            </a>
          </div>
        </section>

        <section className={styles.card}>
          <h3>Projeto Web</h3>
          <p>
            Trabalho do 3º período da faculdade. Foi utilizado o conhecimento da
            época para fazer um site responsivo sem utilizar qualquer outra
            ferramenta além do CSS e flexbox, respeitando também a estrutura
            HTML com as tags.{' '}
          </p>
          <div className={styles.card_footer}>
            <div className={styles.card_icones}>
              <FaHtml5 />
              <FaCss3Alt />
              <FaJs />
            </div>
            <a
              href={'https://joaopver10.github.io/projeto-web/index.html'}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.botao}>
              <BsArrowRight />
            </a>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Projetos;
