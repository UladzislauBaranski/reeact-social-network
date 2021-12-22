 import classes from "./Header.module.css";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg"
                 alt="qwe"/>

            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    :<NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    );
}
export default Header;