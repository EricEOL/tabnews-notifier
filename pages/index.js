import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [] = useState(null);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <form className={styles.form}>
            <div className={styles.formContainer}>
              <div className={styles.telegramForm}>
                <strong>Telegram</strong>
                <div>
                  <label>Bot Key</label>
                  <input type="text" placeholder="bot5723123438:AEEGSptRjacy_ZIojCrRjdaUUuChFM-lgb7kA" />
                </div>
                <div>
                  <label>Chat id</label>
                  <input type="text" placeholder="@elopesnotificatabnews" />
                </div>
              </div>
              <div className={styles.tabnewsForm}>
                <strong>Tabnews</strong>
                <div>
                  <label>Username</label>
                  <input type="text" placeholder="elopes" />
                </div>
                <div>
                  <label>Post Slug</label>
                  <input type="text" placeholder="notificador-tabnews-no-telegram" />
                </div>
              </div>
            </div>
            <button type="submit">Eu quero ser notificado!</button>
          </form>
        </div>
      </section>
    </main>
  )
}
