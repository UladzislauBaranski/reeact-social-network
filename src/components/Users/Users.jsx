import React from "react";
import s from "./User.module.css";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    console.log('tot', props.totalUsersCount)
    console.log('paf', props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
        console.log('pages', pages)
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
                    <img className={s.img}
                         src={u.photos.small != null ? u.photos.small : 'https://softcatalog.info/ru/sites/default/files/styles/addthis/public/program/logo/adobe_photoshop-logo.png'}/>
                </div>
                <div>
                  {u.followed ? <button onClick={() => {
                          props.unfollow(u.id)
                      }}>Unfollow</button> :
                      <button onClick={() => {
                          props.follow(u.id)
                      }}>Follow</button>}
                </div>
            </span>

                <span>
                <span>
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