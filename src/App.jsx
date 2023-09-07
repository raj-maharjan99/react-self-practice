import styles from "./App.module.css";
function App() {
  return (
    <div>
      {/* <header className="header"> matra html ho but 
      <header className={styles.header}> this is html with java script */}
      <header className={styles.header}>
        <h1>Header</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.centerBox}>
          <div className={styles.box}></div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
// global.css laai main.jsx ma lagera
// rakhne import such as "./global.css";
