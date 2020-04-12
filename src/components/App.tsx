import React, { useEffect, useState } from 'react'
import PseudoInput from './PseudoInput'
import Markets from './market/Markets'
import styles from './App.module.css'

const keyLocalStoragePseudo = 'pseudo'

const App: React.FC = () => {
  const [pseudo, setPseudo] = useState(localStorage.getItem(keyLocalStoragePseudo))

  useEffect(() => {
    pseudo && localStorage.setItem(keyLocalStoragePseudo, pseudo)
  }, [pseudo])

  return (
    <div className={styles.appWrapper}>
      <header>
        <h1>Turnip Market</h1>
        {pseudo && <h2>
          <span role='img' aria-label='Hello'>👋</span> {pseudo}
        </h2>}
      </header>

      <div className={styles.content}>
        {pseudo
          ? <Markets pseudo={pseudo}/>
          : <PseudoInput setPseudo={setPseudo}/>
        }
      </div>
    </div>
  )
}

export default App
