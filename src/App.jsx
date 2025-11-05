
import styles from'./App.module.css'
import perfil from '../public/imagem12-removebg-preview.png'
import facebookIcon from '/face-removebg-preview.png'
import instagramIcon from '/insta.webp'
import linkedinIcon from '/linkedin.webp'
import WhatappIcon from '/whats-removebg-preview.png'
import htmlIcon from '/html5.webp'
import cssIcon from '/CSS.png'
import javaIcon from '/java.png'
import viteIcon from '/vite.jpg'
import reactIcon from '/react.png'
import vercelIcon from '/vercel.png'


function App() {

//javascript

  return (
      <>
        <nav className={styles.menu}>
          <a href="#s1">home</a>
          <a href="#s2">cards</a>
          <a href="#s3">video</a>
          <a href="#s4">contato</a>
        </nav>
        <main>
          <section className={styles.s1} id='s1'>
            <div className={styles.left}> 
              <img className={styles.igmPerfil} src={perfil} alt="imagem12.jpg" />
            </div>
            <div className={styles.right}>
              <h2 className={styles.tittle}>Samuel Mucham</h2>
              <p className={styles.paragraph}>programador iniciante,estou terminando o ensino medio, estudo programação em um curso do senai</p>
            </div>
          </section >

          <section className={styles.s2} id='s2'>
            <h2 className={styles.tecTittle}>session2</h2>
            <div className={styles.wrapCards}>
              <div className={styles.card}>
                <img width={100} src={htmlIcon} alt="HTML" />
                <h3>HTML</h3>
                <p>HTML é a sigla para Hypertext Markup Language 
                  (Linguagem de Marcação de Hipertexto) e 
                  é a linguagem de marcação padrão usada para criar
                   e estruturar páginas da web.</p>
              </div>
               <div className={styles.card}>
                <img width={100} src={cssIcon} alt="CSS" />
                <h3>CSS</h3>
                <p>CSS (Cascading Style Sheets)
                   é uma linguagem de estilo usada 
                   para descrever a apresentação visual 
                   de um documento escrito em linguagem de 
                   marcação como HTML.</p>
              </div>
                <div className={styles.card}>
                <img width={100} src={javaIcon} alt="JS" />
                <h3>JS</h3>
                <p>JavaScript é uma linguagem de programação leve, 
                  interpretada e versátil, usada para tornar páginas
                   da web dinâmicas e interativas.</p>
              </div>
                 <div className={styles.card}>
                <img width={100} src={viteIcon} alt="VITE JS" />
                <h3>VITE JS</h3>
                <p>Vite.js (pronuncia-se "viet", que significa "rápido"
                   em francês) é uma ferramenta de construção de front-end 
                   moderna e leve que proporciona uma experiência de 
                   desenvolvimento excepcionalmente rápida para projetos web.</p>
              </div>
               <div className={styles.card}>
                <img width={100} src={reactIcon} alt="REACT" />
                <h3>REACT</h3>
                <p>é uma biblioteca JavaScript de código aberto utilizada para 
                  construir interfaces de usuário (UI) para aplicações web e móveis.</p>
              </div>
               <div className={styles.card}>
                <img width={100} src={vercelIcon} alt="VERCEL" />
                <h3>VERCEL</h3>
                <p>é uma plataforma de nuvem (cloud) para desenvolvedores front-end.</p>
              </div>
            </div>
          </section>
          <section id='s3'>
            <h2>session3</h2>
          </section>
          <section id='s4'>
            <h2>session4</h2>
          </section>
        </main>
        <footer className={styles.rodape}>
          <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'><img width={70} src={facebookIcon} alt="Facebook" /></a>
          <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'><img width={70} src={instagramIcon} alt="Instagram" /></a>
          <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer'><img width={70} src={linkedinIcon} alt="Linkedin" /></a>
          <a href="https://www.whatsapp.com" target='_blank' rel='noopener noreferrer'><img width={70} src={WhatappIcon} alt="Whatapp" /></a>
        </footer>
      </>
  )
}

export default App
