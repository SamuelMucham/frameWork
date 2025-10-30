
import styles from'./App.module.css'

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
        <section>
          <h2>session1</h2>
        </section>
        <section>
          <h2>session2</h2>
        </section>
        <section>
          <h2>session3</h2>
        </section>
        <section>
          <h2>session</h2>
        </section>
      </main>
    </>
  )
}

export default App
