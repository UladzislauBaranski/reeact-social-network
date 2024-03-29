import React from "react";
import s from "./User.module.css";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={(e) => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p && s.font}>{p + ' '}</span>
            })}
        </div>

        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img className={s.img}
                         src={u.photos.small != null ? u.photos.small : 'https://softcatalog.info/ru/sites/default/files/styles/addthis/public/program/logo/adobe_photoshop-logo.png'}/>
                </NavLink>
                </div>
                <div>
                  {u.followed ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {

                          props.unfollow(u.id);  //thunk

                      }}>Unfollow</button> :
                      <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {

                          props.follow(u.id);  //thunk
                      }}>Follow</button>}
                </div>
            </span>

                <span>
                <span>
                    <div>{u.id}</div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                 <span>
                 {/*   <div>{u.location.country}</div>*/}
                     {/*     <div>{u.location.city}</div>*/}
                </span>
            </span>
            </div>
        )}

    </div>
}


export default Users;