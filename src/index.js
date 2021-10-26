import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import StoreContext from "./StoreContext"

let rerenderTemplateTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
            <App/>
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
//rerenderTemplateTree(store.getState());
//store.subscriber(rerenderTemplateTree);


rerenderTemplateTree(store);
store.subscribe(()=>{
    rerenderTemplateTree(store);
});



reportWebVitals();
