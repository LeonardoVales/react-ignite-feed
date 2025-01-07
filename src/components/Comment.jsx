import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      
      <Avatar hasBorder={false} src='https://github.com/LeonardoVales.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo</strong>
              <time title='11 de Maio' dateTime='2024-05-01' >Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom dev, parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaydir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}