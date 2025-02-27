import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post() {
    return (
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar hasBorder src='https://github.com/LeonardoVales.png' />
            <div className={styles.authorInfo}>
              <strong>Leonardo</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title='11 de Maio' dateTime='2024-05-01' >Publicado há 1h</time>
        </header>

        <div className={styles.content}>
          
        </div>

        <form className={styles.commentForm}>
          <strong>Deixei seu feedback</strong>
          <textarea
            placeholder='Deixe um comentário'
          />

          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    );
}