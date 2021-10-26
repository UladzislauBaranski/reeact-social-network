import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";

let rerenderTemplateTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
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
