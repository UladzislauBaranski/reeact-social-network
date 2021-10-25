import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

export function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile profileData={props.state.profilePage}
                                                  dispatch={props.dispatch}/>}/>

                    <Route path='/dialogs'
                           render={() => <Dialogs newTextMessage={props.state.messagePage.newTextMessage} dialogsData={props.state.messagePage} dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
