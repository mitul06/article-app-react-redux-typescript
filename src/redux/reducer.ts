import { ADD_ARTICLE, REMOVE_ARTICLE } from "./actionTypes";

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: "post 1",
      body: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 2,
      title: "post 2",
      body: "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
};

const reducer = (
    state : ArticleState = initialState,
    action : ArticleAction
): ArticleState => {
    switch (action.type) {
        case ADD_ARTICLE:
            const newArticle: IArticle = {
                id : Math.random(),
                title : action.article.title,
                body : action.article.body
            }
            return {
                ...state,
                articles : state.articles.concat(newArticle)
            }

        case REMOVE_ARTICLE: 
            const updatedArticles: IArticle[] = state.articles.filter(
                article => article.id !== action.article.id
            )
            return {
                ...state,
                articles : updatedArticles
            }
    
        default: return state;
    }
}

export default reducer;