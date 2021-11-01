import React, { Dispatch, useCallback } from 'react';
import './App.css';
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { addArticle, removeArticle } from './redux/actionCreator';
import AddArticle from './components/AddArticle';
import Article from './components/Article';

const App: React.FC = () => {

  const articles : readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = useCallback(
    (article : IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <div >
      <h1>Articles</h1>
      <AddArticle saveArticle={saveArticle} />

<hr/>
      {articles.map((article: IArticle) => (
        <Article key={article.id} article={article} removeArticle={removeArticle}  />
      ))}

    </div>
  );
}

export default App;
