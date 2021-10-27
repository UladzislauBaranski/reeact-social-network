import React from "react";
import * as axios from "axios";
import s from "./User.module.css";

let Users = (props) => {

    let getUsers=()=> {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
                })
        }
    }

    return <div>
        <button onClick={getUsers}>get users</button>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img className={s.img}
                         src={u.photos.small !=null ? u.photos.small: 'https://softcatalog.info/ru/sites/default/files/styles/addthis/public/program/logo/adobe_photoshop-logo.png'}/>
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