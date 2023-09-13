import styles from './layout.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <style>
        {`
          body {
            background-color: black;
            overflow-y: hidden;
          }

          .hotPinkText {
            background: linear-gradient(45deg, #8A2BE2, #0BFFFF);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            text-fill-color: transparent;
          }
        `}
      </style>

      <div className={styles.description}>
        <div>
         
        </div>
      </div>

      <div className={styles.center}>
        <h1 className={`${styles.comingSoon} hotPinkText`} style={{ fontSize: '4em', marginBottom:'8rem' }}>
          Coming Soon...
        </h1>
      </div>
    </main>
  )
}
