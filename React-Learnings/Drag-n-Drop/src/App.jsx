
import styles from './App.module.css'

function App() {

  const onDragStartHandler = (e) => {
    console.log('Drag starting');
    // e.dataTransfer.setData('text/plain', e.target.id)
    
  }

  const onDragEnterHandler = () => {
    console.log('Drag Entering');
  }

  const onDragLeaveHandler = () => {} 

  
  return (
    <>
      <section className={styles.kanabanBoard}>
        <div className={styles.todoContainer}>
          <h3>Todo Container</h3>
          <div className={styles.todoContentContainer}>
            <div className={styles.content} draggable="true" onDragStart={onDragStartHandler} onDragEnter={onDragEnterHandler} onDragLeave={onDragLeaveHandler} id="1"><p>This is the First Item</p></div>
            <div className={styles.content} draggable="true" onDragStart={onDragStartHandler} onDragEnter={onDragEnterHandler} onDragLeave={onDragLeaveHandler} id="2"><p>This is the Second Item</p></div>
            <div className={styles.content} draggable="true" onDragStart={onDragStartHandler} onDragEnter={onDragEnterHandler} onDragLeave={onDragLeaveHandler} id="3"><p>This is the Third Item</p></div>
            <div className={styles.content} draggable="true" onDragStart={onDragStartHandler} onDragEnter={onDragEnterHandler} onDragLeave={onDragLeaveHandler} id="4"><p>This is the First Item</p></div>
            <div className={styles.content} draggable="true" onDragStart={onDragStartHandler} onDragEnter={onDragEnterHandler} onDragLeave={onDragLeaveHandler} id="5"><p>This is the Fourth Item</p></div>
            <div className={styles.content} draggable="true" onDragStart={onDragStartHandler} onDragEnter={onDragEnterHandler} onDragLeave={onDragLeaveHandler} id="6"><p>This is the Fifth Item</p></div>
            <div className={styles.content} draggable="true" onDragStart={onDragStartHandler} onDragEnter={onDragEnterHandler} onDragLeave={onDragLeaveHandler} id="7"><p>This is the Sixth Item</p></div>
          </div>
        </div>
        <div className={styles.completedContainer}>
        <h3>Completed Container</h3>
        <div className={styles.completedContentContainer}>
        </div>
        </div>
      </section>
    </>
  )
}

export default App
