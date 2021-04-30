import {createStore, applyMiddleware, Store} from 'redux'
import thunk from 'redux-thunk'
import reducers from "./reducers";

const store: Store<ArticleState, ArticleAction> & { dispatch: DispatchType } = createStore(reducers, applyMiddleware(thunk));

export default store;