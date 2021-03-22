import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* importing CreateStore() function from Redux */
import { Provider } from 'react-redux'; /* to avoid passing store as a prop we use the Provider component which is imported from 'react-redux' */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';

const store = createStore(
    shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    /* this second argument is addded so that our application can communicate with Redux DevTools Extension */
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
/* Provider can be accessed anywhere on the component tree regardless of where it is located */
    
