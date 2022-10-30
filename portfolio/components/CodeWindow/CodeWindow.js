import styles from './CodeWindow.module.css'


const CodeWindow = () => {
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
            export default HelloWorld = () {'=>'} {'{'} <br/>
            {`      <div>`}Hello World{`</div>`} <br/>
            {'}'} 
          </code>
        </pre>
      </div>
    </div>
  )
}

export default CodeWindow
