import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Comment.module.css';

export function Comment(props) {

    //No state criamos o estado e iniciamos ele com o valor inicial que é zero
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        //console.log('Deletar comment')

        props.onDeleteComment(props.content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount +1)
    }



    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Estefano</strong>
                            <time dateTime="2022/12/10 08:13:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment}title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{props.content}</p>

                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}