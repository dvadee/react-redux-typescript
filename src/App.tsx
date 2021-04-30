import React, { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import './App.css';

import { Article } from './components/Article';
import { AddArticle } from './components/AddArticle';
import { addArticle, removeArticle } from './store/actions';
import { Dispatch } from 'redux';

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual,
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch],
  );

  return (
    <main>
      <h1>Articles list</h1>
      <AddArticle saveArticle={saveArticle}/>
      {
        articles.map(article => <Article  key={article.id} article={article} removeArticle={removeArticle} />)
      }
    </main>
  )
};

export default App;