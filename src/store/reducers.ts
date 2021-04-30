import * as actionTypes from './actionTypes';

let id: number = 0;

const initialState: ArticleState = {
    articles: [
        {
            id: ++id,
            title: "post 1",
            body:
                "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
        },
        {
            id: ++id,
            title: "post 2",
            body:
                "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
        },
    ],
}



const reducers = (
    state: ArticleState = initialState,
    action: ArticleAction
): ArticleState => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLE: {
            const newArticle: IArticle = {
                id: ++id,
                title: action.article.title,
                body: action.article.body,
            }

            return {
                ...state,
                articles: [...state.articles, newArticle]
            }
        }
        case actionTypes.REMOVE_ARTICLE: {
            const updatedArticles = state.articles.filter(article => article.id !== action.article.id);

            return {
                ...state,
                articles: updatedArticles
            }
        }
    }

    return state;
}

export default reducers;