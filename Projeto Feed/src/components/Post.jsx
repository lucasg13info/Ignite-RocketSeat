import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

//author: {url_avatar}
// publishedAt: date
//content: string



//Estado = são variaveis que eu quero que o componente monitore




export function Post(props){
    const [comments, setComments] = useState([
       'Post muito bacana'
    ])


    const [newCommentText, setNewCommentText] = useState('')


    const publishedDateFormatted = format(props.publishedAt,  "d 'de' LLLL 'às' HH:mm'h' ", {
        locale: ptBr,
    })

    const publisheDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBr,
        addSuffix: true
    }) 


    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
        
    // }).format(props.publishedAt)
    //console.log('data e hora', publishedDateFormatted)
    //console.log(props)
    function handleCreateNewComment() {
        //preventDefault = faz com que a fique na mesma tela 
        event.preventDefault()
        
        // const newCommentText =event.target.comment.value
        //console.log(event.target.comment.value)
        
        setComments([...comments, newCommentText])
        setNewCommentText('')

        // event.target.comment.value = ''
        
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('') //Após o usuário digitar a mensagem de erro fica em branco
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(){
        //console.log(event)
        event.target.setCustomValidity('Esse campo é obrigatório!') //Mudando o texto com campo obrigatório
    }


    function deleteComment(commentToDelete){
        // Imutabilidade: No react nós nunca apagamos uma informação, na vdd nós criamos uma informação nova atualizada sem o dado que queremos tirar e salvando dentro do estado.
        // Para deletar um item, precisamos na verdade criar uma nova lista sem o dado que não queremos, dessa forma é muito mais performatico para o react. 
        const commentsWithoutdeletedOne = comments.filter(comment =>{
            return comment != commentToDelete
        })

        setComments(commentsWithoutdeletedOne);

    }
    

    //const isNewCommentEmpty = newCommentText.length == 0;
    
    return(
        <article className ={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src={props.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>

                </div>
                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
                    {publisheDateRelativeToNow}
                    
                </time>
            </header>

            <div className={styles.content}>
                {props.content.map(line =>{
                    if(line.type == 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }
                    else if (line.type == 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>


            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                
                <textarea
                    name="comment" 
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid} //Chamada sempre que o html identificar que foi tentado fazer um submit sem texto
                    required //Usado para validação do formulario não ir vazio
                />


                <footer>
                    <button 
                        type="submit" 
                        //disabled={isNewCommentEmpty}
                        >
                            Publicar
                    </button>
                </footer>


            </form>

            <div className={styles.commentList}>
                {/* Vamos percorrer o array de comentarios e para cada coment vamos retornar um componente */}
                {comments.map(comment =>{
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )

                })}
            </div>
        </article>
    )
}



