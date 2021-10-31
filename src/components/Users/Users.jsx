import React from "react";
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                  {u.followed ? <button onClick={() => {

                          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                              {
                                  withCredentials: true,
                                  headers: {"API-KEY": "98d6fd19-753b-465d-b047-34a0e3187ff5"}
                              }
                          )
                              .then(response => {
                                  if (response.data.resultCode === 0) {
                                      props.unfollow(u.id);
                                  }

                              });


                      }}>Unfollow</button> :
                      <button onClick={() => {
                          axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                              {},
                              {
                                  withCredentials: true,
                                  headers: {"API-KEY": "98d6fd19-753b-465d-b047-34a0e3187ff5"}
                              })   
                              .then(response => {
                                  if (response.data.resultCode === 0) {
                                      props.follow(u.id);
                                  }

                              });

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