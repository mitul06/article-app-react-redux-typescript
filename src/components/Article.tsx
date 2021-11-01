import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch, useCallback } from 'react'
import { useDispatch } from 'react-redux'

type Props = {
    article : IArticle
    removeArticle: (article : IArticle) => void
}

const Article: React.FC<Props> = ({article, removeArticle}) => {

    const dispatch: Dispatch<any> = useDispatch();
    const deleteArticle = useCallback(
        (article:IArticle) => dispatch(removeArticle(article)),
        [dispatch, removeArticle]
    ) 

    return (
      <div className="Article">
        <div>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </div>
        <button onClick={() => deleteArticle(article)}>
          <FontAwesomeIcon icon={faTrash} className="icon" size="2x" />
        </button>
      </div>
    );
}

export default Article
