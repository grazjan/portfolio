import { useState, useEffect } from 'react'
import styles from './CodeWindow.module.css'


const CodeWindow = () => {

  const [typingAnimation, setTypingAnimation] = useState('');
  const [typeSymbolAnimation, setTypeSymbolAnimation] = useState(false);

  useEffect(() => {
    typeAnimation();
  }, [])

  const typeAnimation = () => {
    const text = `export default HelloWorld = () => {${'\n\t'}<div>Hello World</div> ${'\n'}}`
    let textArr = text.split('');
    let i = 0;

    let typed = "";

    // Interval 
    let typeInterval = setInterval(() => {

      if(i == textArr.length-1) { 
        clearInterval(typeInterval);
        setTypeSymbolAnimation(true);
      }

      typed = typed + textArr[i]
      setTypingAnimation(typed)
      i++;
    }, 50)
    
  }

  return (
    <div className={styles.codewindow}>
      <div className={styles.bar}>
        <div className={styles.barControls}>
          <div className={`${styles.btnBar} ${styles.btnClose}`}></div>
          <div className={`${styles.btnBar} ${styles.btnMinimalize}`}></div>
          <div className={`${styles.btnBar} ${styles.btnExpand}`}></div>
        </div>
      </div>
      <div className={styles.code}>
        <pre>
          <code> 
            {typingAnimation}
            <span className={`${styles.typingSymbol} ${typeSymbolAnimation ? styles.active : ''}`}>|</span>
          </code>
        </pre>
      </div>
    </div>
  )
}

export default CodeWindow
