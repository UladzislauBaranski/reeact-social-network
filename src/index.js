import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";

let rerenderTemplateTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
//rerenderTemplateTree(store.getState());
//store.subscriber(rerenderTemplateTree);


rerenderTemplateTree(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    rerenderTemplateTree(state);
});



reportWebVitals();
