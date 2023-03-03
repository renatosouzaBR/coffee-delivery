import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <section className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/renatosouzaBR.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentArea}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Renato Souza</strong>
              <span>Cerca de 2h</span>
            </div>

            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <button onClick={handleLikeComment}>
          <ThumbsUp size={20} />
          Aplaudir <span>{likeCount}</span>
        </button>
      </div>
    </section>
  )
}