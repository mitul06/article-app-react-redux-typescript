import { ADD_ARTICLE, REMOVE_ARTICLE } from "./actionTypes"

export const addArticle = (article : IArticle) => {
    const action: ArticleAction = {
        type : ADD_ARTICLE,
        article,
    }

    return simulateHttpRequest(action);
}

export const removeArticle = (article : IArticle) => {
    const action: ArticleAction = {
        type : REMOVE_ARTICLE,
        article,
    }

    return simulateHttpRequest(action);
}

export const simulateHttpRequest = (action : ArticleAction) => {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500);
    }
}