import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <form className={styles.form}>
            <strong>Telegram</strong>
            <div>
              <label>Bot Key</label>
              <input type="text" placeholder="bot5723123438:AEEGSptRjacy_ZIojCrRjdaUUuChFM-lgb7kA" />
            </div>
            <div>
              <label>Chat id</label>
              <input type="text" placeholder="@elopesnotificatabnews" />
            </div>
          </form>

          <form className={styles.form}>
            <strong>Tabnews</strong>
            <div>
              <label>Username</label>
              <input type="text" placeholder="elopes" />
            </div>
            <div>
              <label>Post Slug</label>
              <input type="text" placeholder="notificador-tabnews-no-telegram" />
            </div>
          </form>
        </div>
        <button>Eu quero ser notificado!</button>
      </section>
    </main>
  )
}