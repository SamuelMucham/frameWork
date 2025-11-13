import styles from "./App.module.css"
import perfil from "/imagem12-removebg-preview.png"
import facebookIcon from "/face-removebg-preview.png"
import instagramIcon from "/insta.webp"
import linkedinIcon from "/linkedin.webp"
import WhatappIcon from "/whats-removebg-preview.png"

import { useState , useEffect } from "react";
import { Card } from "./components/card";

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch("/cardsinfo.json")
      .then((response) => response.json())
      .then((data) => {
        setDados(data);
      })
  }, [])

  const defaultPhoneNumber = "5541998337141";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleZap = () => {
    const { name, email, message } = formData;
    const urlZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`;
    window.open(urlZap, "_blank");
  };

  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">home</a>
        <a href="#s2">cards</a>
        <a href="#s3">video</a>
        <a href="#s4">contato</a>
      </nav>
      <main>
        <section className={styles.s1} id="s1">
          <div className={styles.left}>
            <img className={styles.igmPerfil} src={perfil} alt="imagem12.jpg" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.tittle}>Samuel Mucham</h2>
            <p className={styles.paragraph}>
              programador iniciante,estou terminando o ensino medio, estudo
              programação em um curso do senai
            </p>
          </div>
        </section>

        <section className={styles.s2} id="s2">
          <h2 className={styles.tecTittle}>TECNOLOGIAS</h2>
          <div className={styles.wrapCards}>
            {dados.map((item) => {
              return (
                <div key={item.id}>
                <Card
                  tec={item.tecnologia}
                  image={item.imagem}
                  text={item.texto}/>
                  </div>
              )
            })}
          </div>
        </section>

        <section id="s3">
          <h2>session3</h2>
        </section>

        <section id="s5" className={styles.s5}>
          <h2>escola</h2>
        </section>

        <section id="s4" className={styles.s4}>
          <h2>CONTATO</h2>
          <div className={styles.formData}>
            <label htmlFor="name">digite seu nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">informe seu email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">informe uma mensagem</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="30"
              required
            ></textarea>
            <button onClick={handleZap}>enviar mensagem </button>
          </div>
        </section>
      </main>
      <footer className={styles.rodape}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={70} src={facebookIcon} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={70} src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={70} src={linkedinIcon} alt="Linkedin" />
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={70} src={WhatappIcon} alt="Whatapp" />
        </a>
      </footer>
    </>
  );
}

export default App;
