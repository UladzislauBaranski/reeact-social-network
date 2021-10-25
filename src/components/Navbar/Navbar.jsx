import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item} >
                <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <a href="/">News</a>
            </div>
            <div className={classes.item}>
                <a href="/">Music</a>
            </div>
            <div className={classes.item}>
                <a href="/">Settings</a>
            </div>
        </nav>
    );
}
export default Navbar;