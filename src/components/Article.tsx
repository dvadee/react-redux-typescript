import React, { useCallback }  from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

type Props = {
  article: IArticle,
  removeArticle: (article: IArticle) => void
}

export const Article: React.FC<Props> = ({article, removeArticle}) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  )

  return (
    <div className="article">
      <div>
        <h1 className="article-title">{article.title}</h1>
        <p className="article-body">{article.body}</p>
      </div>
      <button  className="article-delete-btn" onClick={() => deleteArticle(article)}>delete</button>
    </div>
  )
}