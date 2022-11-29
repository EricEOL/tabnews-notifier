import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [botKey, setBotKey] = useState(null);
  const [chatId, setChatId] = useState(null);
  const [username, setUsername] = useState(null);
  const [postSlug, setPostSlug] = useState(null);
  const [message, setMessage] = useState(null);

  const SUCCESS_MESSAGE = "Seu post está sendo monitorado"
  const ERROR_MESSAGE = "Seus parâmetros são inválidos";

  function handleRegisterPostMonitor(event) {

    event.preventDefault();
    
    const data = {
      botKey,
      chatId,
      username,
      postSlug
    }

    console.log(data);

    if(!verifyContents(data)) {
      // REQUISIÇÃO PARA O ENDPOINT DO TELEGRAM
      localStorage.setItem('tabnews-post-monitor', JSON.stringify(data));
      console.log("aqui né")
      setMessage(SUCCESS_MESSAGE);
      return;
    } else {
      console.log("aqui fora")

      setMessage(ERROR_MESSAGE);
    }

  }

  function verifyContents(object) {
    return Object.values(object).some(property => property === null || property.length === 0);
  }

  return (
    <main className={styles.main}>
      <section className={styles.formSection}>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={(event) => handleRegisterPostMonitor(event)}>
            <div className={styles.formContainer}>
              <div className={styles.telegramForm}>
                <strong>Telegram</strong>
                <div>
                  <label>Bot Key</label>
                  <input 
                    type="text" 
                    placeholder="bot5723123438:AEEGSptRjacy_ZIojCrRjdaUUuChFM-lgb7kA" 
                    onChange={(event) => setBotKey(event.target.value)} />
                </div>
                <div>
                  <label>Chat id</label>
                  <input 
                    type="text" 
                    placeholder="@elopesnotificatabnews" 
                    onChange={(event) => setChatId(event.target.value)} />
                </div>
              </div>
              <div className={styles.tabnewsForm}>
                <strong>Tabnews</strong>
                <div>
                  <label>Username</label>
                  <input 
                    type="text" 
                    placeholder="elopes" 
                    onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                  <label>Post Slug</label>
                  <input 
                    type="text" 
                    placeholder="notificador-tabnews-no-telegram" 
                    onChange={(event) => setPostSlug(event.target.value)} />
                </div>
              </div>
            </div>
            <button type="submit">Eu quero ser notificado!</button>
            <p>{message}</p>
          </form>
        </div>
      </section>
      <section className={styles.monitoredPostSection}>
        
      </section>
    </main>
  )
}
